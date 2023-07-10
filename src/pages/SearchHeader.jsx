import React from 'react';
import Filters from "../components/Filters";
import {useLocation} from "react-router-dom";
import {SEARCH_ROUTE} from "../utils/consts";

const SearchHeader = () => {
    const path = useLocation().pathname
    const search = useLocation().search;

    let query = path.split("/")[2];
    query = query.split(" ");

    query.forEach((value, index, array) => {array[index] = value[0].toUpperCase() + value.substring(1)})
    query = query.join(" ");

    return (

        <div className="SearchHeader_container">
            <h2>{query}&nbsp;Images</h2>
            <a className="pictures_number_container" href={path + search}>
                <span>Photos&nbsp;</span>
                <span id="pictures_number"></span>
            </a>

            <Filters/>

        </div>

    );
};

export default SearchHeader;