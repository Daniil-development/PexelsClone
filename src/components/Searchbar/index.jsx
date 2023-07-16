import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { SEARCH_ROUTE } from "../../utils/consts";
import styles from "./index.module.css";
import { ReactComponent as SearchIcon } from "../../assets/search.svg";

const Searchbar = ({ parent }) => {
  const history = useHistory();
  const path = useLocation().pathname;
  let query = null;
  if (path.startsWith(SEARCH_ROUTE)) {
    query = path.split("/")[2];
  }
  const [searchQuery, setSearchQuery] = useState(query || "");

  const searchButtonClickHandler = () => {
    history.push(SEARCH_ROUTE + "/" + searchQuery + "/");
  };

  return (
    <div className={styles.form}>
      <input
        type="search"
        id={parent + "SearchbarInput"}
        className={styles.input}
        placeholder={"Search for free photos"}
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
        onKeyUp={(event) => event.key === "Enter" && searchButtonClickHandler()}
      />

      <button className={styles.button} onClick={searchButtonClickHandler}>
        <SearchIcon />
      </button>
    </div>
  );
};

export default Searchbar;
