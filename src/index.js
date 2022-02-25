import React from "react";
import ReactDOM from "react-dom";
import Axios from "axios";

import "./index.css";

import App from "./App";

Axios.defaults.baseURL = "https://chicagomusic-back.herokuapp.com/";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
