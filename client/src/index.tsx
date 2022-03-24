import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore, applyMiddleware, Store } from "redux"
import thunk from "redux-thunk"
import { Provider } from "react-redux"
import reducer from "./store/combinedReducer";
import { composeWithDevTools } from 'redux-devtools-extension';

const composeEnhancers = composeWithDevTools({
  // Specify here name, actionsBlacklist, actionsCreators and other options
});

const store: Store<any, any> & {
  dispatch: DispatchType
} = createStore(reducer, composeEnhancers(
   applyMiddleware(thunk),
    // other store enhancers if any
  ));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
       <Provider store={store}>
    <App />
   </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
