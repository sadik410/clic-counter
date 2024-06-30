import React from 'react';
import ReactDOM, { render } from 'react-dom';

import Counter from './Counter';

describe('Counter component tests', () => {
  let container;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  test('renders Counter component with correct initial count', () => {
    ReactDOM.render(
      <Counter counter={0} onIncrement={() => {}} onDecrement={() => {}} />,
      container
    );
    expect(container.textContent).toContain('Vous avez cliqué 0 fois');
  });

  test('increments count', () => {
    const onIncrement = jest.fn();
    ReactDOM.render(
      <Counter counter={0} onIncrement={onIncrement} onDecrement={() => {}} />,
      container
    );
    const buttons = container.querySelectorAll('button');
    const incrementButton = buttons[0];
    incrementButton.dispatchEvent(
      new MouseEvent('click', { bubbles: true, cancelable: true })
    );
    expect(onIncrement).toHaveBeenCalledTimes(1);
  });

  test('decrements count', () => {
    const onDecrement = jest.fn();
    ReactDOM.render(
      <Counter counter={1} onIncrement={() => {}} onDecrement={onDecrement} />,
      container
    );
    const buttons = container.querySelectorAll('button');
    const decrementButton = buttons[1];
    decrementButton.dispatchEvent(
      new MouseEvent('click', { bubbles: true, cancelable: true })
    );
    expect(onDecrement).toHaveBeenCalledTimes(1);
  });

  test('does not decrement count when counter is 0', () => {
    const onDecrement = jest.fn();
    ReactDOM.render(
      <Counter counter={0} onIncrement={() => {}} onDecrement={onDecrement} />,
      container
    );
    const buttons = container.querySelectorAll('button');
    const decrementButton = buttons[1];
    decrementButton.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    expect(onDecrement).toHaveBeenCalledTimes(0);
  });
});
