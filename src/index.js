import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createClient } from 'pexels';
import axios from "axios";

export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root'));
//const client = createClient(process.env.API_KEY);
axios.defaults.headers.common['Authorization'] = process.env.REACT_APP_API_KEY;
if (localStorage.getItem("PhotoLikes") === null || localStorage.getItem("PhotoLikes") === undefined) localStorage.setItem("PhotoLikes", JSON.stringify([]))
root.render(
    <App/>
    );

