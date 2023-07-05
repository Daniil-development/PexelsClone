import React from 'react';
import Navbar from "./Navbar";
import {useHistory, useLocation} from "react-router-dom";
import {INDEX_ROUTE} from "../utils/consts";
import Header from "./Header";
import Main from "./Main";
import Load from "./Load";
import MainHeader from "./MainHeader";

const Index = () => {
    const location = useLocation();
    const history = useHistory();

    return (
        <div>
            <Navbar/>

            {location.pathname === INDEX_ROUTE ?
                <Header/>
                :
                <></>
            }

            <MainHeader/>

            <Main/>

        </div>
    );
};
export default Index;