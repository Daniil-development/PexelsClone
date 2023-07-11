import React, {useContext, useEffect, useState} from 'react';
import Column from "./Column";
import axios from "axios";
import {INDEX_ROUTE, PICTURES_PER_PAGE, SEARCH_ROUTE} from "../utils/consts";
import {useLocation} from "react-router-dom";
import styles from "./Grid.module.css"
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const Grid = observer(() => {
        const {state} = useContext(Context);


        const location = useLocation();
        const [prevLocation, setPrevLocation] = useState(location.pathname + location.search);
        const [currentPage, setCurrentPage] = useState(1);

        useEffect(() => {
                console.log("PREF " + currentPage + state.fetching)
                if (state.fetching) {

                    console.log("fetching " + currentPage);
                    let indexRequest = `https://api.pexels.com/v1/curated?page=${currentPage}&per_page=${PICTURES_PER_PAGE}`;

                    let path = location.pathname;

                    let search = location.search;

                    let apiRequest = indexRequest;

                    if (path !== INDEX_ROUTE) {
                        path = path.split("/");
                        if (path.length >= 3 && "/" + path[1] === SEARCH_ROUTE && path[2].length > 0) {
                            apiRequest = `https://api.pexels.com/v1/search?query=${path[2]}&page=${prevLocation !== location.pathname + location.search ? 1 : currentPage}&per_page=${PICTURES_PER_PAGE}`;
                            if (search !== "") {
                                search = search.substring(1);
                                apiRequest += "&" + search;
                            }
                        }
                    }

                    try {
                    axios.get(apiRequest)
                        .then(response => {
                            console.log(response.data)
                            if (prevLocation !== location.pathname + location.search) {
                                state.setItems(response.data.photos);
                                setCurrentPage(2);

                            } else {
                                state.setItems([...state.items, ...response.data.photos]);
                                setCurrentPage(prevState => prevState + 1);

                            }
                            setPrevLocation(location.pathname + location.search);


                            state.setTotalCount(response.data.total_results);

                        }).catch((error) => {console.log(error); state.setError(true)})
                        .finally(() => {
                            console.log("Fetched");
                            state.setFetching(false)
                        });
                    } catch (error) {
                        console.log(error);
                        state.setError(true);
                    }
                }
            }, [state.fetching]
        )

        useEffect(() => {
            document.addEventListener('scroll', scrollHandler);

            return function () {
                document.removeEventListener('scroll', scrollHandler);
            }


        }, [])

        const scrollHandler = (e) => {
            //console.log("Screen - " + (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < window.innerHeight))
            //console.log("Items - " + (items.length <= totalCount))
            console.log(state.items.length, " ", state.totalCount)
            if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < window.innerHeight * 4
                && state.items.length < state.totalCount) {
                console.log(e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight), "---", window.innerHeight * 4)
                state.setFetching(true);
                console.log("FETCHINGINSCROLL" + state.fetching)
            }
        }



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