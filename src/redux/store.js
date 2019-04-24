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

export const getValue = store => ({
  value: store.value
});

const initialState = {
  value: 0
};

const store = createStore(
  counter,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
