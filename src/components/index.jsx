import React, {useEffect, useLayoutEffect, useState} from 'react';
import Navbar from "./Navbar";
import {Redirect, Route, Switch, useHistory, useLocation} from "react-router-dom";
import {INDEX_ROUTE, SEARCH_ROUTE} from "../utils/consts";
import Header from "./Header";
import Main from "./Main";
import Load from "./Load";
import MainHeader from "./MainHeader";
import axios from "axios";

const Index = () => {
    const [photo, setPhoto] = useState({
        src : {
            original : ""
        },
        photographer : "",
        photographer_url : ""
    });

    useEffect( () => {
        let count = 20;

        let request = `https://api.pexels.com/v1/search?query=Wallpaper&per_page=${count}&orientation=landscape`;

        axios.get(request)
            .then(response => {
                let photos = response.data.photos;

                let i = Math.floor(Math.random() * photos.length);

                setPhoto(photos[i]);

            }).catch((error) => {console.log(error)})
    }, [])

    return (
        <div>
            <Navbar/>
            <Route exact path={INDEX_ROUTE}>

                <Header photo={photo}/>
            </Route>

            <MainHeader/>

            <Main/>

        </div>
    );
};
export default Index;