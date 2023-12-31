import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById("root"));
if (
  localStorage.getItem("PhotoLikes") === null ||
  localStorage.getItem("PhotoLikes") === undefined
)
  localStorage.setItem("PhotoLikes", JSON.stringify([]));

root.render(<App />);
