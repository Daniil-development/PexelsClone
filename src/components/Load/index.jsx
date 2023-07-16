import React, {useContext} from 'react';
import styles from "./index.module.css"
import {Context} from "../../index";
import state from "../../store/state";

const Load = () => {
    //const {state} = useContext(Context);
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