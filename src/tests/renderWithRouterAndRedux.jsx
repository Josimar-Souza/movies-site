import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from '../redux/reducers/rootReducer';

function renderWithRouterAndRedux(component) {
  const store = createStore(rootReducer, applyMiddleware(thunk));

  return {
    ...render(
      <Provider store={store}>
        <BrowserRouter>
          {component}
        </BrowserRouter>
      </Provider>,
    ),
  };
}

export default renderWithRouterAndRedux;
