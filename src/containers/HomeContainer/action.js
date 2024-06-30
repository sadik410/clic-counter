import { INCREMENT, DECREMENT } from './constant';

export function incrementAction() {
  return {
    type: INCREMENT,
  };
}
// Decrement action logic
export function decrementAction() {
  return {
    type: DECREMENT,
  };
}
