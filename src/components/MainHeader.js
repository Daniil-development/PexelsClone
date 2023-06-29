import React from 'react';
import {useLocation} from "react-router-dom";
import {INDEX_ROUTE} from "../utils/consts";
import HomepageHeader from "../pages/HomepageHeader";
import SearchHeader from "../pages/SearchHeader";

const MainHeader = () => {
    const location = useLocation();

    return (
        location.pathname === INDEX_ROUTE ?
            <HomepageHeader/>
            :
            <SearchHeader/>



    );
};

export default MainHeader;