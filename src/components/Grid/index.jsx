import React, {useCallback, useContext, useEffect} from 'react';
import Column from "../Column";
import {INDEX_ROUTE, PICTURES_PER_PAGE} from "../../utils/consts";
import {useLocation} from "react-router-dom";
import styles from "./index.module.css"
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {getData} from "../../api/API";

const Grid = observer(() => {
        const {state} = useContext(Context);
        const location = useLocation();

        useEffect(() => {
                console.log("PREF " + state.currentPage + state.fetching)
                if (state.fetching) {

                    console.log("fetching " + state.currentPage);
                    let url = `/curated?page=${state.currentPage}&per_page=${PICTURES_PER_PAGE}`;

                    let path = location.pathname;

                    let search = location.search;

                    if (path !== INDEX_ROUTE) {
                        path = path.split("/");
                        url = `/search?query=${path[2]}&page=${state.currentPage}&per_page=${PICTURES_PER_PAGE}`;
                        if (search !== "") {
                            search = search.substring(1);
                            url += "&" + search;
                        }
                    }

                    getData(url).then(data => {
                        if (data === null) {
                            state.setError(true);
                        }
                        console.log(data)
                        state.setItems([...state.items, ...data.photos]);
                        state.setCurrentPage(state.currentPage + 1);

                        state.setTotalCount(data.total_results);
                    })
                        .finally(() => {
                            state.setFetching(false)
                        });

                }
            }, [state.fetching]
        )

        const scrollHandler = useCallback((e) => {
            if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < window.innerHeight * 4
                && state.items.length < state.totalCount && !state.fetching) {
                state.setFetching(true);
            }
        }, []);
        useEffect(() => {
            document.addEventListener('scroll', scrollHandler);

            return function () {
                document.removeEventListener('scroll', scrollHandler);
            }
        }, [scrollHandler])


        return (
            <div className={styles.container}>
                <Column items={state.items.filter(function (item, index) {

                    return (index + 3) % 3 === 0
                })} column_index={0}/>
                <Column items={state.items.filter(function (item, index) {
                    return (index + 2) % 3 === 0
                })} column_index={1}/>
                <Column items={state.items.filter(function (item, index) {
                    return (index + 1) % 3 === 0
                })} column_index={2}/>
            </div>
        );
    }
);

export default Grid;

/*
        let columnsHeight=[{column: 0, height: 0}, {column: 1, height: 0}, {
            column: 2,
            height: 0
        }];
        let columnsIndexes=[0, 1, 2];


            <div className="Grid_container">
                <Column items={items.filter(function (item, index) {
                    if ((index + 3) % 3 === 0) {
                        console.log(index)
                        columnsHeight.sort((a, b) => a.height - b.height);
                        console.log(columnsHeight)

                        let heights = [
                            {
                                index: 0,
                                height: item.height
                            },
                            {
                                index: 1,
                                height: items[index + 1].height
                            },
                            {
                                index: 2,
                                height: items[index + 2].height
                            }
                        ];

                        heights.sort((a, b) => b.height - a.height);

                        console.log(heights)


                        columnsIndexes[columnsHeight[0].column] = heights[0].index;
                        columnsIndexes[columnsHeight[1].column] = heights[1].index;
                        columnsIndexes[columnsHeight[2].column] = heights[2].index;

                        columnsHeight[0].height += heights[0].height;
                        columnsHeight[1].height += heights[1].height;
                        columnsHeight[2].height += heights[2].height;

                        console.log(columnsIndexes)


                    }

                    return (index + columnsIndexes[0]) % 3 === 0
                })} column_index={0}/>
                <Column items={items.filter(function (item, index) {
                    return (index + columnsIndexes[1]) % 3 === 0
                })} column_index={1}/>
                <Column items={items.filter(function (item, index) {
                    return (index + columnsIndexes[2]) % 3 === 0
                })} column_index={2}/>
            </div>

 */