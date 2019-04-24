import React from "react";

export default function Increment({ increment }) {
  return (
    <button name="increment" onClick={increment}>
      increment
    </button>
  );
}
