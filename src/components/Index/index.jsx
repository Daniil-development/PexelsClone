import React, {useEffect, useState} from 'react';
import Navbar from "../Navbar";
import {Route} from "react-router-dom";
import {INDEX_ROUTE} from "../../utils/consts";
import Header from "../Header";
import Main from "../Main";
import MainHeader from "../MainHeader";
import {getData} from "../../api/API";

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

        let request = `/search?query=Wallpaper&per_page=${count}&orientation=landscape`;

        getData(request)
            .then(data => {
                let photos = data.photos;

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