import React from 'react';
import Navbar from "./Navbar";
import {useHistory, useLocation} from "react-router-dom";
import {INDEX_ROUTE} from "../utils/consts";
import Header from "./Header";
import Main from "./Main";
import Load from "./Load";

const Index = () => {
    const location = useLocation();
    const history = useHistory();

    return (
        <div id="__next" data-reactroot={""}>
            <Navbar/>

            {location.pathname === INDEX_ROUTE ?
                <Header/>
                :
                <div/>
            }

            <Main/>

            <Load/>
        </div>
    );
};
export default Index;