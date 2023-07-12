import React, {useContext} from 'react';
import styles from "./index.module.css"
import {Context} from "../../index";

const Load = () => {
    const {state} = useContext(Context);
    return (
        <div className={styles.container}>
            <div className={styles.spinner}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <button className={styles.button} onClick={()=>state.setFetching(false)}>Continue</button>
        </div>
    );
};

export default Load;