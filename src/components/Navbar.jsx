import React, {useEffect, useState} from 'react';
import Searchbar from "./Searchbar";
import {INDEX_ROUTE} from "../utils/consts";
import {useLocation} from "react-router-dom";

const Navbar = () => {
    const location = useLocation();
    const [isFixed, setIsFixed] = useState(false);


    useEffect(() => {
        if (isFixed) {
            console.log("FIXED");
        } else {
            console.log("NOT");
        }
    }, [isFixed])

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler);

        return function () {
            document.removeEventListener('scroll', scrollHandler);
        }


    }, []);

    const scrollHandler = (e) => {
        if (location.pathname !== INDEX_ROUTE) {
            setIsFixed(true);

        } else if (location.pathname === INDEX_ROUTE && document.querySelector(".Header_container").getBoundingClientRect().bottom < 0 && isFixed === false) {
            setIsFixed(true);

        } else if (location.pathname === INDEX_ROUTE && document.querySelector(".Header_container").getBoundingClientRect().bottom >= 0) {
            setIsFixed(false);
        }
    };

    return (
    <div className={(isFixed || location.pathname !== INDEX_ROUTE) ? "Navbar_fixed Navbar_container container" : "Navbar_container container"}>
            <a className="logo_container" href={INDEX_ROUTE}>
                <img className="logo_image" src="/img/Pexels.png" alt="Pexels logo"/>
                <div className="logo_text">Pexels</div>
            </a>

        {isFixed || location.pathname !== INDEX_ROUTE ?
            <div className="Navbar_Searchbar_container">
                <Searchbar/>
            </div>
            :
            <></>
        }

        </div>
    );
};

export default Navbar;