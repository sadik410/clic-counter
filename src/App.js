import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import configureStore from './configureStore';
import history from './utils/history';
import Home from './containers/HomeContainer';
// Create redux store with history
const initialState = {};
const store = configureStore(initialState, history);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <h1>Clic Counter </h1>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route component={() => (<h2>Page introuvable</h2>)} />
          </Switch>
        </Router>
      </Provider>
    )
  }
}

export default App;
