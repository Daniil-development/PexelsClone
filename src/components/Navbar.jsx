import React, {useEffect, useState} from 'react';
import Searchbar from "./Searchbar";
import {INDEX_ROUTE} from "../utils/consts";
import {useLocation} from "react-router-dom";
import styles from "./Navbar.module.css"

const Navbar = () => {
    const location = useLocation();
    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler);

        return function () {
            document.removeEventListener('scroll', scrollHandler);
        }


    }, []);

    const scrollHandler = (e) => {

        if (location.pathname !== INDEX_ROUTE) {
            setIsFixed(true);

        } else if (location.pathname === INDEX_ROUTE && document.getElementById("header").getBoundingClientRect().bottom < 0 && isFixed === false) {
            setIsFixed(true);

        } else if (location.pathname === INDEX_ROUTE && document.getElementById("header").getBoundingClientRect().bottom >= 0) {
            setIsFixed(false);
        }
    };

    return (
    <div className={`${styles.container} ${(isFixed || location.pathname !== INDEX_ROUTE) ? styles.navbarFixed : ""}`}>
            <a className={styles.logoContainer} href={INDEX_ROUTE}>
                <svg height="50" viewBox="0 0 50 50" width="50" className={styles.logoImage}>
                        <rect width="50" height="50" rx="8"></rect>
                        <path
                            d="M32.671,44.73h7.091V37.935H41.9a5.657,5.657,0,1,0,0-11.314H32.671Zm10.763,3.622H29V23H41.9a9.271,9.271,0,0,1,1.53,18.435Z"
                            ></path>
=                </svg>
                <div className={styles.logoText}>Pexels</div>
            </a>

        {isFixed || location.pathname !== INDEX_ROUTE ?
            <div className={styles.searchbarContainer}>
                <Searchbar parent={"Navbar"}/>
            </div>
            :
            <></>
        }

        </div>
    );
};

export default Navbar;