import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import thunk from "redux-thunk" // 要 applyMiddleware

import './index.css';
import reducer from "./reducers"

import EventsIndex from './components/events_index';
import * as serviceWorker from './serviceWorker';


// store にstate が集約される
const store = createStore(reducer, applyMiddleware(thunk))


// <App /> を <Provider>でラップするとアプリケーション内の全階層のコンポーネントからstoreが利用可能になる。
ReactDOM.render(
  <Provider store={store}>
    <EventsIndex />
  </Provider>,
  // <App />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
