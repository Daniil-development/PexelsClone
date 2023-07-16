import React from "react";
import Filters from "../../components/Filters";
import { Link, useLocation } from "react-router-dom";
import styles from "./index.module.css";
import { observer } from "mobx-react-lite";
import state from "../../store/state";
import { ejectQueryAndToUppercase } from "../../utils/ejectQueryAndToUppercase";
import { formatTotalCount } from "../../utils/formatTotalCount";

const SearchHeader = observer(() => {
  const path = useLocation().pathname;
  const search = useLocation().search;

  let query = ejectQueryAndToUppercase(path);

  let totalCountFormatted = formatTotalCount(state.totalCount.toString());

  return (
    <div className={styles.container}>
      {!state.fetching && !state.totalCount ? (
        <h2 className={styles.h2}>
          We couldn’t find anything for “
          <span className={styles.query}>{query}</span>“.
          <br />
          Try to refine your search.
        </h2>
      ) : (
        <>
          <h2 className={styles.h2}>{query}&nbsp;Images</h2>
          <Link className={styles.picturesNumberContainer} to={path + search}>
            <span>Photos&nbsp;</span>
            <span className={styles.picturesNumber}>{totalCountFormatted}</span>
          </Link>

          <Filters />
        </>
      )}
    </div>
  );
});

export default SearchHeader;
