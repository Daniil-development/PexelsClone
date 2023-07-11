import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import State from "./store/state";

export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root'));
if (localStorage.getItem("PhotoLikes") === null || localStorage.getItem("PhotoLikes") === undefined) localStorage.setItem("PhotoLikes", JSON.stringify([]))

root.render(
    <Context.Provider value={{
        state: new State()
    }}>
        <App/>
    </Context.Provider>);

