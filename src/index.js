import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import reducers from './reducers';
import "babel-polyfill";
import Logger from 'redux-logger';
// import Thunk from 'react-thunk';
const createStoreWithMiddleware = applyMiddleware(Logger)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history = {browserHistory} routes={routes}/>
  </Provider>
  , document.querySelector('.container'));