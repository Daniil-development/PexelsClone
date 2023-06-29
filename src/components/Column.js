import React from 'react';
import Item from "./Item";

const Column = () => {
    return (
        <div className={"BreakpointGrid_column__CTepl"} data-testid={"column"}>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>

        </div>
    );
};

export default Column;