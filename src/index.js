import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import store from 'react-redux';

import './index.css';
import App from './App';
import { createStore } from 'redux';

import rootReducer, {plusAction} from './store/counter';

const store = new createStore(rootReducer);
console.log('store', store)
console.log('store getState', store.getState())
store.subscribe(() => console.log('subscribe',store.getState()))

store.dispatch(plusAction(10));


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter> ,
  document.getElementById('root')
);
