import React from "react";
import styles from "./index.module.css";

const Load = () => {
  return (
    <div className={styles.container}>
      <div className={styles.spinner}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Load;
