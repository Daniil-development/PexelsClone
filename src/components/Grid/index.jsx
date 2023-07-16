import React, { useCallback, useEffect } from "react";
import Column from "../Column";
import { useLocation } from "react-router-dom";
import styles from "./index.module.css";
import { observer } from "mobx-react-lite";
import state from "../../store/state";
import { setNewDocumentTitle } from "../../utils/setNewDocumentTitle";

const Grid = observer(() => {
  const location = useLocation();

  useEffect(() => {
    state.resetGrid();
    state.fetchGrid(location);
    setNewDocumentTitle(location.pathname);
  }, [location]);

  const scrollHandler = useCallback((e) => {
    let documentRemainingHeight =
      e.target.documentElement.scrollHeight -
      (e.target.documentElement.scrollTop + window.innerHeight);
    if (
      documentRemainingHeight < window.innerHeight * 4 &&
      state.items.length < state.totalCount &&
      !state.fetching
    ) {
      state.setFetching(true);
      state.fetchGrid();
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);

    return function () {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [scrollHandler]);

  return (
    <div className={styles.container}>
      <Column
        items={state.items.filter((_, index) => {
          return (index + 3) % 3 === 0;
        })}
        column_index={0}
      />
      <Column
        items={state.items.filter((_, index) => {
          return (index + 2) % 3 === 0;
        })}
        column_index={1}
      />
      <Column
        items={state.items.filter((_, index) => {
          return (index + 1) % 3 === 0;
        })}
        column_index={2}
      />
    </div>
  );
});

export default Grid;
