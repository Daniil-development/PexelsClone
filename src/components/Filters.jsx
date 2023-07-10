import React from 'react';
import Filter from "./Filter";
import {FILTERS} from "../utils/consts";

const Filters = () => {

    return (
        <div className="Filters_container">
            {FILTERS.map(filter =>
                <Filter key={filter.name + "_filter"} filter={filter}/>
            )}

        </div>
    );
};

export default Filters;