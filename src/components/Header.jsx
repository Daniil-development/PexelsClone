import React, {useEffect, useLayoutEffect, useState} from 'react';
import Searchbar from "./Searchbar";
import TrendingSuggestions from "./TrendingSuggestions";
import {INDEX_ROUTE, PICTURES_PER_PAGE, SEARCH_ROUTE} from "../utils/consts";
import axios from "axios";

const Header = ({photo}) => {

    return (
        <header id="header" className="Header_container container">
            <div className="Header_content_container">
                <h1 className="Header_h1">The best free stock photos, royalty free images & videos shared by
                    creators.</h1>
                <div className="Header_Searchbar_container">
                    <Searchbar parent={"Header"}/>
                </div>
                <div className="Header_trending_container">
                    <span style={{display: "inline-block"}}>Trending:&nbsp;</span>
                    <TrendingSuggestions/>
                </div>
            </div>

            <div className="Header_image_container">
                <img className="Header_image" src={photo.src.original + "?auto=compress&cs=tinysrgb&fit=crop&h=500&w=1400&dpr=1"} alt={""}/>
            </div>

            <a className="Header_author_container" href={photo.photographer_url}>
                <span>Photo by&nbsp;</span>
                <span className="Header_author_name">{photo.photographer}</span>
            </a>
        </header>
    );
};

export default Header;