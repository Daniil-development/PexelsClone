import React from 'react';
import Filter from "../Filter";
import {FILTERS} from "../../utils/consts";
import styles from "./index.module.css"

const Filters = () => {

    return (
        <div className={styles.container}>
            {FILTERS.map(filter =>
                <Filter key={filter.name + "_filter"} filter={filter}/>
            )}

        </div>
    );
};

export default Filters;