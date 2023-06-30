import React from 'react';
import Item from "./Item";

const Column = ({items, column_index}) => {
    return (
        <div id={"Column_" + column_index} className="Column">
            {items.map(item =>
            <Item item={item}/>
            )}


        </div>
    );
};

export default Column;