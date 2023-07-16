import React, {useContext} from 'react';
import Filters from "../../components/Filters";
import {useLocation} from "react-router-dom";
import styles from "./index.module.css";
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import state from "../../store/state";

const SearchHeader = observer(() => {
    //const {state} = useContext(Context);

    const path = useLocation().pathname
    const search = useLocation().search;

    let query = path.split("/")[2];
    query = query.split(" ");

    query.forEach((value, index, array) => {
        array[index] = value[0].toUpperCase() + value.substring(1)
    })
    query = query.join(" ");

    let totalCountFormatted = state.totalCount.toString();
    switch (Math.floor((totalCountFormatted.length - 1) / 3)) {
        case 0:
            break;
        case 1:
            totalCountFormatted = totalCountFormatted.substring(0, totalCountFormatted.length - 3) + "." + totalCountFormatted[totalCountFormatted.length - 3] + "K";
            break;
        case 2:
            totalCountFormatted = totalCountFormatted.substring(0, totalCountFormatted.length - 6) + "." + totalCountFormatted[totalCountFormatted.length - 6] + "M";
            break;
        case 3:
            totalCountFormatted = totalCountFormatted.substring(0, totalCountFormatted.length - 9) + "." + totalCountFormatted[totalCountFormatted.length - 9] + "MM";
            break;
        default:
            totalCountFormatted = "Inf";
    }

    return (

        <div className={styles.container}>
            {!state.fetching && !state.totalCount ?
                <h2 className={styles.h2}>
                    We couldn’t find anything for “<span className={styles.query}>{query}</span>“.
                    <br/>
                    Try to refine your search.
                </h2>
                :
                <>
                    <h2 className={styles.h2}>{query}&nbsp;Images</h2>
                    <a className={styles.picturesNumberContainer} href={path + search}>
                        <span>Photos&nbsp;</span>
                        <span className={styles.picturesNumber}>{totalCountFormatted}</span>
                    </a>

                    <Filters/>
                </>
            }
        </div>

    );
});

export default SearchHeader;