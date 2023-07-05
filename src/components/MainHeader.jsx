import React from 'react';
import {useLocation} from "react-router-dom";
import {INDEX_ROUTE} from "../utils/consts";
import HomepageHeader from "../pages/HomepageHeader";
import SearchHeader from "../pages/SearchHeader";

const MainHeader = () => {
    const location = useLocation();

    return (
        <div className="container" style={{marginTop: location.pathname === INDEX_ROUTE ? "30px" : "110px"}}>
            {location.pathname === INDEX_ROUTE ?
                <HomepageHeader/>
                :

                <SearchHeader/>
            }
        </div>

    );
};

export default MainHeader;