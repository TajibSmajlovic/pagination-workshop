import React from "react";
import ReactDOM from "react-dom/client";

import "./lib/utils/styles/CssReset.css";
import "./lib/utils/styles/CssVariables.css";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
