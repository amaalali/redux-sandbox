import React from "react";
import ReactDOM from "react-dom";
import store from "./redux/store";
import { Provider, connect } from "react-redux";
import Value from "./components/Value";
import { increment } from "./redux/actions";
import "./styles.css";

function Increment({ increment }) {
  return (
    <button name="increment" onClick={increment}>
      increment
    </button>
  );
}

function Decrement(props) {
  return <button name="decrement">decrement</button>;
}

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Value value={this.props.value} />
        <div>
          <Increment increment={this.props.increment} />
          <Decrement />
        </div>
      </div>
    );
  }
}

const CApp = connect(
  state => ({ value: state.value + 3.142 }),
  { increment }
)(App);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <CApp />
  </Provider>,
  rootElement
);
