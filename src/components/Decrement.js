import React from "react";
import { connect } from "react-redux";
import { decrement } from "../redux/actions";

function Decrement({ decrement }) {
  return (
    <button name="decrement" onClick={decrement}>
      decrement
    </button>
  );
}

const CDecrement = connect(
  null,
  { decrement }
)(Decrement);

export default CDecrement;
