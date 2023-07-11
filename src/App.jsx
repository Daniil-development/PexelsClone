import {observer} from "mobx-react-lite";
import Index from "./components/Index";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import {INDEX_ROUTE, SEARCH_ROUTE} from "./utils/consts";
import React from "react";

const App = observer(() => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={SEARCH_ROUTE + "/:query"}>
                    <Index/>
                </Route>

                <Route exact path={INDEX_ROUTE}>

                    <Index/>
                </Route>

                <Redirect to={INDEX_ROUTE}/>

            </Switch>
        </BrowserRouter>
    )
})

export default App;
