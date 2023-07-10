import React from 'react';
import {SEARCH_ROUTE, TRENDING_SUGGESTIONS} from "../utils/consts";
import axios from "axios";
import styles from "./TrendingSuggestions.module.css"

const TrendingSuggestions = () => {

    let suggestions = [];
    let array = TRENDING_SUGGESTIONS;
    let n = 7;
    if (n >= array.length) {
        suggestions = TRENDING_SUGGESTIONS;
    } else {
        for (let i = 0; i < n; i++) {
            let j = Math.floor(Math.random() * (array.length - i)) + i;
            suggestions[i] = array[j];
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    return (
        <ul className={styles.trendingSuggestions}>
            {suggestions.map(suggestion =>
                <li key={"Suggestion " + suggestion} className={styles.suggestion}>
                    {suggestion === suggestions[0] ?
                        <></>
                        :
                        <span>,&nbsp;</span>
                    }
                    <a href={SEARCH_ROUTE + "/" + suggestion + "/?"}>{suggestion}</a>

                </li>
            )}
        </ul>
    );
};

export default TrendingSuggestions;