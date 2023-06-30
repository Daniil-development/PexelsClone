import React from 'react';
import Filters from "../components/Filters";

const SearchHeader = () => {
    return (
        <div className="SearchHeader_container">
            <h2> Images & Pictures</h2>
            <div className="pictures_number_container">
                <span>Photos</span>
                <span id="pictures_number"></span>
            </div>

            <Filters/>

        </div>

    );
};

export default SearchHeader;