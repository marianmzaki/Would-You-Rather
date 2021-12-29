// Import the libraries needed to:
//  Create Store
//  Apply Middleware
//  Develop UI with react
//  Use the Context using Provider and Consumer in the child components
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import logger from './middleware/logger';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(rootReducer, applyMiddleware(thunk, logger));
ReactDOM.render(
    // Add the provider and pass the store in the Context arround the App tag.
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
