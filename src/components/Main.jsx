import React from 'react';
import Grid from "./Grid";
import Load from "./Load";
import styles from "./Main.module.css"

const Main = () => {

    return (
        <main className={styles.container}>
            <Grid/>
            <Load/>
        </main>
    );
};

export default Main;