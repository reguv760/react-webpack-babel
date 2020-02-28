import React from "react";
import ReactDOM from "react-dom";

//style
import "./style/style.css";

//component
import App from "./App.js";

const wrapper = document.getElementById("app");
ReactDOM.render(
  <div>
    <App />
  </div>,
  wrapper
);
