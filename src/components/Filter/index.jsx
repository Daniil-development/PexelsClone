import React, {useContext, useEffect, useState} from 'react';
import {useHistory, useLocation} from "react-router-dom";
import styles from "./index.module.css"
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import state from "../../store/state";

const Filter = observer (({filter}) => {
    //const {state} = useContext(Context);
    const [menuOpen, setMenuOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(0)

    const path = useLocation().pathname;
    const search = useLocation().search;
    const history = useHistory();

    useEffect(() => {
        if (search !== "") {
            let params = search.substring(1).split("&")

            for (let i = 0; i < params.length; i++) {
                if (params[i].startsWith(filter.name)) {
                    setSelectedValue(filter.descriptions.indexOf(params[i].split("=")[1]));
                }
            }
        }
    }, [])


    const clickHandler = (event) => {
        let buttons = document.getElementsByClassName(`${filter.name}_filter_button`)
        for (const button of buttons) {
            if (button === event.target || button.contains(event.target))
                return
        }

        let menu = document.getElementById(filter.name + "_menu")

        if (menu === null)
            return;

        if (menuOpen) {
            let target = event.target;

            if (!menu.contains(target)) {

                setMenuOpen(false);
            }
        }
    }

    document.body.addEventListener('click', clickHandler)


    return (
        <div id={filter.name + "_filter"} className={styles.filter}>
            <button id={filter.name + "_filter_button"}
                    className={`${styles.button} ${filter.name}_filter_button ${selectedValue !== 0 ? styles.selected : ""}`}
                    onClick={() => setMenuOpen(!menuOpen)}>
                <span
                    className={styles.value}>{filter.values[selectedValue]}</span>
                <span className={styles.arrow}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path
                                d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>
                        </span>
            </button>
            {menuOpen &&
                <ul id={filter.name + "_menu"} className={styles.menu}>
                    {filter.values.map((value, index) =>
                        <button key={filter.name + "_item_" + index} id={filter.name + "_item_" + index}
                                className={`${styles.item} ${filter.name}_filter_button ${styles.button} ${(index === selectedValue) ? styles.item_selected : ""}`}
                                onClick={() => {

                                    if (index !== selectedValue) {
                                        let request = path;

                                        if (index) {
                                            selectedValue === 0 ?
                                                request += (search === "" ? "?" : search + "&") + filter.name + "=" + filter.descriptions[index]
                                                :
                                                request += search.replace(filter.descriptions[selectedValue], filter.descriptions[index])


                                        } else {
                                            if (!search.includes("&"))
                                                request += "?";
                                            else if (search.endsWith(filter.descriptions[selectedValue])) {
                                                request += search.replace("&" + filter.name + "=" + filter.descriptions[selectedValue], "");
                                            } else
                                                request += search.replace(filter.name + "=" + filter.descriptions[selectedValue] + "&", "");

                                        }
                                        console.log(request);
                                        history.push(request);
                                        state.resetGrid();

                                    }
                                    setSelectedValue(index);
                                    setMenuOpen(false)
                                }}>
                            <span className={styles.value}>{value}</span>
                            {index === selectedValue &&
                                <span>
                                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 448 512"><path
                                    d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                            </span>
                            }
                        </button>)}
                </ul>
            }
        </div>
    );
});

export default Filter;