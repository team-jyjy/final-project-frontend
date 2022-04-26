import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import reducers from "./reducers";
import { Provider } from 'react-redux';
import { createStore } from "redux";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import styled from 'styled-components';

const Button = styled.button`
  display:block;
  padding:6px 10px;
  color: #fff;
  font-size:18px;
  border-radius:3px;
  background-color: crimson;
  border: 0;
`;
const store = createStore(reducers);
const rootNode = ReactDOM.createRoot(document.getElementById('root'));
const listener = () => {
  rootNode.render(
    <Provider store = {store}>
      <App indexProp = "코딩병원119"/>
      <div>
        <Button>버튼이에용</Button>
      </div>
    </Provider>,
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
store.subscribe(listener);
listener();
