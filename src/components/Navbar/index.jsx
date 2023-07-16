import React, {useCallback, useEffect, useState} from 'react';
import Searchbar from "../Searchbar";
import {INDEX_ROUTE} from "../../utils/consts";
import {useLocation} from "react-router-dom";
import styles from "./index.module.css"
import pexelsLogo from "../../assets/pexelsLogo.svg";

const Navbar = () => {
    const location = useLocation();
    const [isFixed, setIsFixed] = useState(false);

    const scrollHandler = useCallback(() => {
        const isIndexRoute = location.pathname === INDEX_ROUTE;
        if (!isIndexRoute) {
            setIsFixed(true);
        } else if (isIndexRoute && document.getElementById("header").getBoundingClientRect().bottom < 0 && isFixed === false) {
            setIsFixed(true);

        } else if (isIndexRoute && document.getElementById("header").getBoundingClientRect().bottom >= 0) {
            setIsFixed(false);
        }
    }, [isFixed, location.pathname]);

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler);

        return function () {
            document.removeEventListener('scroll', scrollHandler);
        }


    }, [scrollHandler]);

    return (
    <div className={`${styles.container} ${(isFixed || location.pathname !== INDEX_ROUTE) ? styles.navbarFixed : ""}`}>
            <a className={styles.logoContainer} href={INDEX_ROUTE}>
                <img src={pexelsLogo} className={styles.logoImage} alt={"Pexels logo"}/>
                <div className={styles.logoText}>Pexels</div>
            </a>

        {(isFixed || location.pathname !== INDEX_ROUTE) &&
            <div className={styles.searchbarContainer}>
                <Searchbar parent={"Navbar"}/>
            </div>
        }

        </div>
    );
};

export default Navbar;