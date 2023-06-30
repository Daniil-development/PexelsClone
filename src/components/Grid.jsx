import React from 'react';
import Column from "./Column";

const Grid = () => {

    let items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    return (
        <div className="Grid_container">
            <Column items={items.slice(0, 4)} column_index={0}/>
            <Column items={items.slice(4, 8)} column_index={1}/>
            <Column items={items.slice(8, 12)} column_index={2}/>
        </div>
    );
};

export default Grid;