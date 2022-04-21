import React from 'react';
import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

function renderWithRouterAndRedux(component, state) {
  const history = createMemoryHistory();
  const store = createStore(state);

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
