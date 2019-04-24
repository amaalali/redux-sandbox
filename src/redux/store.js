import { createStore } from "redux";
import { INCREMENT, DECREMENT } from "./actionTypes";

function counter(state = { value: 0 }, action) {
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case DECREMENT:
      return { value: state.value - 1 };
    default:
      return { value: state.value };
  }
}

const store = createStore(counter, { value: 0 });

export default store;
