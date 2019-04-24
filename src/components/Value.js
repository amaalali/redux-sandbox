import React from "react";
import { connect } from "react-redux";
import { getValue } from "../redux/store";

function Value({ value }) {
  return (
    <div>
      Value: <span id="value"> {value}</span>
    </div>
  );
}

const CValue = connect(getValue)(Value);

export default CValue;
