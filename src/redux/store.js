import { createStore } from "redux";
import actionType from "./actionTypes";

function counter(state = { value: 0 }, action) {
  switch (action.type) {
    case actionType.INCREMENT:
      return { value: state.value + 1 };
    case actionType.DECREMENT:
      return { value: state.value - 1 };
    default:
      return { value: state.value };
  }
}

const store = createStore(counter, { value: 0 });

export default store;
