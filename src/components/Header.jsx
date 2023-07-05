import React from 'react';
import Searchbar from "./Searchbar";
import TrendingSuggestions from "./TrendingSuggestions";

const Header = () => {
    return (
        <header id="header" className="Header_container container">
            <div className="Header_content_container">
                <h1 className="Header_h1">The best free stock photos, royalty free images & videos shared by
                    creators.</h1>
                <div className="Header_Searchbar_container">
                    <Searchbar/>
                </div>
                <div className="Header_trending_container">
                    <span style={{display: "inline-block"}}>Trending:&nbsp;</span>
                    <TrendingSuggestions/>
                </div>
            </div>

            <div className="Header_image_container">
                <img className="Header_image" src="https://images.pexels.com/photos/16959094/pexels-photo-16959094.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=500&w=1400&dpr=1"/>
            </div>

            <a className="Header_author_container" href="/author">
                <span>Photo by&nbsp;</span>
                <span className="Header_author_name">author name</span>
            </a>
        </header>
    );
};

export default Header;