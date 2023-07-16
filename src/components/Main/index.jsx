import React from "react";
import Grid from "../Grid";
import Load from "../Load";
import styles from "./index.module.css";
import { observer } from "mobx-react-lite";
import Error from "../Error";
import state from "../../store/state";

const Main = observer(() => {
  return (
    <main className={styles.container}>
      <Grid />
      {state.fetching && <Load />}
      {state.error && <Error />}
    </main>
  );
});

export default Main;
