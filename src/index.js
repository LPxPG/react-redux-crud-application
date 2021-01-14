import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux"
import { Provider } from "react-redux"

import './index.css';
import reducer from "./reducers"

import App from './components/App';
import * as serviceWorker from './serviceWorker';


// store にstate が集約される
const store = createStore(reducer)


// <App /> を <Provider>でラップするとアプリケーション内の全階層のコンポーネントからstoreが利用可能になる。
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  // <App />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
