import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link, NavLink, Redirect, useHistory, useLocation} from "react-router-dom";
import {SEARCH_ROUTE} from "../utils/consts";
import Navbar from "./Navbar";

const Searchbar = ({parent}) => {
    const path = useLocation().pathname;
    let query = null;
    if (path.startsWith(SEARCH_ROUTE + "/") && path.split("/")[2] !== "") {
        query = path.split("/")[2];
        query.split(" ").forEach((value, index, array) => {
            array[index] = value[0].toUpperCase()
        })
        //setSearchQuery(query);
    }
    const [searchQuery, setSearchQuery] = useState(query || "");

    const history = useHistory();



    return (
        <form role="search" action={SEARCH_ROUTE + "/" + searchQuery + "/"} autoComplete="off" className="Searchbar_form">
            <input type="search" id={parent + "SearchbarInput"} className="Searchbar_input"
                   placeholder={"Search for free photos"} value={searchQuery}
                   onChange={(event) => setSearchQuery(event.target.value)}/>



            <button type="submit" className="Searchbar_button" formAction={SEARCH_ROUTE + "/" + searchQuery + "/"}>
                <svg xmlns="http://www.w3.org/2000/svg" height="1.4em" viewBox="0 0 512 512">
                    <path
                        d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
                </svg>
            </button>

        </form>
    );
};

export default Searchbar;