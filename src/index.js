import React from "react";
import ReactDOM from "react-dom";
import store from "./redux/store";
import { Provider } from "react-redux";
import Value from "./components/Value";
import Increment from "./components/Increment";
import Decrement from "./components/Decrement";

import "./styles.css";

function App(props) {
  return (
    <div className="App">
      <Value />
      <div>
        <Increment />
        <Decrement />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
