import React from 'react';
import {Redirect, Route, Switch, useLocation} from "react-router-dom";
import {INDEX_ROUTE, SEARCH_ROUTE} from "../utils/consts";
import HomepageHeader from "../pages/HomepageHeader";
import SearchHeader from "../pages/SearchHeader";

const MainHeader = () => {
    const location = useLocation();

    return (
        <div className="container" style={{marginTop: location.pathname === INDEX_ROUTE ? "30px" : "110px"}}>

            <Switch>
                <Route exact path={SEARCH_ROUTE + "/:query"}>
                    <SearchHeader/>
                </Route>
                <Route exact path={INDEX_ROUTE}>
                    <HomepageHeader/>
                </Route>
                <Redirect to={INDEX_ROUTE}/>
            </Switch>


        </div>

    );
};

export default MainHeader;