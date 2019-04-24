import React from "react";
import ReactDOM from "react-dom";
import store from "./redux/store";
import { Provider, connect } from "react-redux";
import Value from "./components/Value";
import Increment from "./components/Increment";
import Decrement from "./components/Decrement";

import { increment, decrement } from "./redux/actions";
import "./styles.css";

function App(props) {
  return (
    <div className="App">
      <Value value={props.value} />
      <div>
        <Increment increment={props.increment} />
        <Decrement decrement={props.decrement} />
      </div>
    </div>
  );
}

const CApp = connect(
  state => ({ value: state.value }),
  { increment, decrement }
)(App);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <CApp />
  </Provider>,
  rootElement
);
