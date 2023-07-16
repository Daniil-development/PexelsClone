import React from "react";
import { SEARCH_ROUTE, TRENDING_SUGGESTIONS } from "../../utils/consts";
import styles from "./index.module.css";
import { Link } from "react-router-dom";
import { randomizeTrendingSuggestions } from "../../utils/randomizeTrendingSuggestions";

const TrendingSuggestions = () => {
  const suggestions = randomizeTrendingSuggestions(TRENDING_SUGGESTIONS);

  return (
    <ul className={styles.trendingSuggestions}>
      {suggestions.map((suggestion) => (
        <li key={"Suggestion " + suggestion} className={styles.suggestion}>
          {suggestion !== suggestions[0] && <span>,&nbsp;</span>}
          <Link to={SEARCH_ROUTE + "/" + suggestion + "/?"}>{suggestion}</Link>
        </li>
      ))}
    </ul>
  );
};

export default TrendingSuggestions;
