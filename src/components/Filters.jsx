import React from 'react';

const Filters = () => {
    const filters = [
        {name : "Orientation",
        values: ["All Orientations", "Horizontal", "Vertical", "Square"]},
        {name : "Size",
        values: ["All Sizes", "Large", "Medium", "Small"]},
    ]
    return (
        <div className="Filters_container">
            {filters.map(filter =>
                <div className={filter.name + "_filter_container"}>
                    <button id={filter.name + "_filter_button"} className="filter_button">
                        <span id={filter.name + "_filter_value"} className="filter_value">Filter</span>
                        <span id={filter.name + "_filter_arrow"} className="filter_arrow">-</span>
                    </button>
                </div>
            )}

        </div>
    );
};

export default Filters;