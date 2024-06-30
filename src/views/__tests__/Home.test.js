import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import ReactDOM, { render } from 'react-dom';
import Home from '../Home';
import reducer from '../../containers/HomeContainer/reducer';
import { incrementAction } from '../../containers/HomeContainer/action';

describe('Home component tests', () => {
  let container;
  let store = createStore(reducer);

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  test('renders Home component and passes props correctly', () => {
    ReactDOM.render(
      <Provider store={store}>
        <Home />
      </Provider>,
      container
    );

    expect(container.textContent).toContain('Vous avez cliqué 0 fois');
  });
});
