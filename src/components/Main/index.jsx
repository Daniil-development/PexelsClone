import React, {useContext} from 'react';
import Grid from "../Grid";
import Load from "../Load";
import styles from "./index.module.css"
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import Error from "../Error";

const Main = observer(() => {
    const {state} = useContext(Context);

    return (
        <main className={styles.container}>
            <Grid/>
            {state.fetching && <Load/>

            }
            {state.error && <Error/>
                }
        </main>
    );
});

export default Main;