import actionType from "./actionTypes";

export function increment() {
  return {
    type: actionType.INCREMENT
  };
}

export function decrement() {
  return {
    type: actionType.DECREMENT
  };
}
