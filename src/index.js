import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import mainReducer from './store'

const store = applyMiddleware(thunk)(createStore)(mainReducer)

ReactDOM.render(
  <Provider store={store}>
  {/* <React.StrictMode> */}
    <Routes/>
  {/* </React.StrictMode> */}
  </Provider>,
  document.getElementById('root')
);

