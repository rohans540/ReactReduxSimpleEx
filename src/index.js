import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import reducer from "./redux/reducer";

import App from "./App";

const store = createStore(reducer);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  rootElement
);
