import React from 'react';
import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from '../redux/reducers/rootReducer';

function renderWithRouterAndRedux(component) {
  const history = createMemoryHistory();
  const store = createStore(rootReducer, applyMiddleware(thunk));

  return {
    ...render(
      <Provider store={store}>
        <Router location={history.location} navigator={history}>
          {component}
        </Router>
      </Provider>,
    ),
  };
}

export default renderWithRouterAndRedux;
