import React from "react";
import ColumnItem from "../ColumnItem";
import styles from "./index.module.css";

const Column = ({ items, column_index }) => {
  return (
    <div id={"Column_" + column_index} className={styles.column}>
      {items.map((item) => (
        <ColumnItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Column;
