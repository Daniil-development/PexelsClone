import React, {useState} from 'react';
import {useLocation} from "react-router-dom";
import {SEARCH_ROUTE} from "../../utils/consts";
import styles from "./index.module.css"
import {ReactComponent as SearchIcon} from "../../assets/search.svg"

const Searchbar = ({parent}) => {
    const path = useLocation().pathname;
    let query = null;
    if (path.startsWith(SEARCH_ROUTE)) {
        query = path.split("/")[2];
    }
    const [searchQuery, setSearchQuery] = useState(query || "");

    return (
        <form role="search" action={SEARCH_ROUTE + "/" + searchQuery + "/"} autoComplete="off" className={styles.form}>
            <input type="search" id={parent + "SearchbarInput"} className={styles.input}
                   placeholder={"Search for free photos"} value={searchQuery}
                   onChange={(event) => setSearchQuery(event.target.value)}/>

            <button type="submit" className={styles.button} formAction={SEARCH_ROUTE + "/" + searchQuery + "/"}>
                <SearchIcon />
            </button>

        </form>
    );
};

export default Searchbar;