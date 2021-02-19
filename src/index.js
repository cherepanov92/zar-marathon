import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import App from './App';

import './index.css';
import { createStore, bindActionCreators } from 'redux';
import rootReducer, * as actions from './store/counter';

const store = new createStore(rootReducer);
console.log('store', store)
console.log('store getState', store.getState())
store.subscribe(() => console.log('subscribe',store.getState()))

const { plusAction, minusAction } = bindActionCreators(actions, store.dispatch);
plusAction(1)
minusAction(3)

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter> ,
  document.getElementById('root')
);
