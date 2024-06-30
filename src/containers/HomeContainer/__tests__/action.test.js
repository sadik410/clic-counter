import { incrementAction, decrementAction } from '../action';
import { INCREMENT, DECREMENT } from '../constant';

describe('Counter actions', () => {
  test('incrementAction should create an increment action', () => {
    const expectedAction = { type: INCREMENT };
    expect(incrementAction()).toEqual(expectedAction);
  });

  test('decrementAction should create a decrement action', () => {
    const expectedAction = { type: DECREMENT };
    expect(decrementAction()).toEqual(expectedAction);
  });
});
