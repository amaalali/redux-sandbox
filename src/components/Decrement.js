import React from "react";

export default function Decrement({ decrement }) {
  return (
    <button name="decrement" onClick={decrement}>
      decrement
    </button>
  );
}
