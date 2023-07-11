import React from 'react';
import styles from "./Error.module.css"

const Error = () => {
    return (
        <div className={styles.container}>
            <span>Load failed. Try to refresh the page.</span>
            <button className={styles.button} title="Refresh" onClick={() => window.location.reload()}>Refresh</button>
        </div>
    );
};

export default Error;