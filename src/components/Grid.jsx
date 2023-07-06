import React, {useContext, useEffect, useState} from 'react';
import Column from "./Column";
import axios from "axios";
import {Context} from "../index";
import {INDEX_ROUTE, PICTURES_PER_PAGE, SEARCH_ROUTE} from "../utils/consts";
import {useLocation} from "react-router-dom";

const Grid = () => {
        const location = useLocation();
        const [items, setItems] = useState([]);
        const [currentPage, setCurrentPage] = useState(1);
        const [fetching, setFetching] = useState(true);
        const [totalCount, setTotalCount] = useState(0);

        //const {client} = useContext(Context);


        useEffect(() => {
                if (fetching) {
                    console.log("fetching");
                    let indexRequest = `https://api.pexels.com/v1/curated?page=${currentPage}&per_page=${PICTURES_PER_PAGE}`;

                    let path = location.pathname;

                    let apiRequest = indexRequest;

                    if (path !== INDEX_ROUTE) {
                        path = path.split("/");
                        if (path.length >= 3 && "/" + path[1] === SEARCH_ROUTE && path[2].length >= 0)
                            apiRequest = `https://api.pexels.com/v1/search?query=${path[2]}&page=${currentPage}&per_page=${PICTURES_PER_PAGE}`;
                    }


                    axios.get(apiRequest)
                        .then(response => {
                            console.log(response.data);
                            setItems([...items, ...response.data.photos]);
                            setCurrentPage(prevState => prevState + 1);
                            setTotalCount(response.data.total_results);
                        })
                        .finally(() => setFetching(false));
                }
            }, [fetching]
        )

        useEffect(() => {
            document.addEventListener('scroll', scrollHandler);

            return function () {
                document.removeEventListener('scroll', scrollHandler);
            }


        }, [])

        const scrollHandler = (e) => {
            console.log("Screen - " + (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < window.innerHeight))
            console.log("Items - " + (items.length <= totalCount))
            if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < window.innerHeight
                && items.length <= totalCount) {
                setFetching(true);
            }
        }

        return (
            <div className="Grid_container">
                <Column items={items.filter(function (item, index) {
                    return (index + 3) % 3 === 0
                })} column_index={0}/>
                <Column items={items.filter(function (item, index) {
                    return (index + 2) % 3 === 0
                })} column_index={1}/>
                <Column items={items.filter(function (item, index) {
                    return (index + 1) % 3 === 0
                })} column_index={2}/>
            </div>
        );
    }
;

export default Grid;