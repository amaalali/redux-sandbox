import React from "react";
import { connect } from "react-redux";
import { increment } from "../redux/actions";

function Increment({ increment }) {
  return (
    <button name="increment" onClick={increment}>
      increment
    </button>
  );
}

export default connect(
  null,
  { increment }
)(Increment);
