import React from 'react';
import Grid from "./Grid";
import Load from "./Load";
import {useLocation} from "react-router-dom";

const Main = () => {

    return (
        <main className="Main_container container">
            <Grid/>
            <Load/>
        </main>
    );
};

export default Main;