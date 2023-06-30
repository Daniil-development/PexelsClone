import React from 'react';
import {TRENDING_SUGGESTIONS} from "../utils/consts";

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
        <ul className="TrendingSuggestions">
            {suggestions.map(suggestion =>
                <li>
                    {suggestion === suggestions[0] ?
                        <></>
                        :
                        <span>,</span>
                    }
                    <a href={"/search/" + suggestion}>{suggestion}</a>

                </li>
            )}
        </ul>
    );
};

export default TrendingSuggestions;