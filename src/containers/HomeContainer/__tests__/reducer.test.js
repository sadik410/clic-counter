import reducer from '../reducer';
import { incrementAction, decrementAction } from '../action';

describe('counter reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({ counter: 0 });
  });

  it('should handle INCREMENT', () => {
    expect(reducer({ counter: 0 }, incrementAction())).toEqual({ counter: 1 });
  });

  it('should handle DECREMENT', () => {
    expect(reducer({ counter: 1 }, decrementAction())).toEqual({ counter: 0 });
  });

  it('should not decrement below 0', () => {
    expect(reducer({ counter: 0 }, decrementAction())).toEqual({ counter: 0 });
  });
});
