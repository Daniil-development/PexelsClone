import React from 'react';
import Item from "./Item";
import styles from "./Column.module.css"

const Column = ({items, column_index}) => {
    return (
        <div id={"Column_" + column_index} className={styles.column}>
            {items.map(item =>
            <Item key={item.id} item={item}/>
            )}


        </div>
    );
};

export default Column;