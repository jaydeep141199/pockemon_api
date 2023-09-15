import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "../src/assets/css/tailwind.css";
import { Provider } from "react-redux";
import store from "./Store/count/store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
