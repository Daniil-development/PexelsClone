import React from 'react';
import Searchbar from "../Searchbar";
import TrendingSuggestions from "../TrendingSuggestions";
import styles from "./index.module.css"

const Header = ({photo}) => {

    return (
        <header id="header" className={styles.container}>
            <div className={styles.contentContainer}>
                <h1 className={styles.h1}>The best free stock photos, royalty free images & videos shared by
                    creators.</h1>
                <div className={styles.searchbarContainer}>
                    <Searchbar parent={"Header"}/>
                </div>
                <div className={styles.trendingContainer}>
                    <span style={{display: "inline-block"}}>Trending:&nbsp;</span>
                    <TrendingSuggestions/>
                </div>
            </div>

            <div className={styles.imageContainer}>
                <img className={styles.image} src={photo.src.original + "?auto=compress&cs=tinysrgb&fit=crop&h=500&w=1400&dpr=1"} alt={""}/>
            </div>

            <a className={styles.authorContainer} href={photo.photographer_url} target={"_blank"} rel={"noreferrer"}>
                <span>Photo by&nbsp;</span>
                <span>{photo.photographer}</span>
            </a>
        </header>
    );
};

export default Header;