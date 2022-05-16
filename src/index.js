import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';



const rootNode = ReactDOM.createRoot(document.getElementById('root'));
  rootNode.render(
    //라우터 적용
    //BrowserRouter : 웹 애플리케이션에 HTML5의 History API를 사용하여 
    //페이지를 새로 불러오지 않고도 주소를 변경하고 현재 주소의경로에 관련된 정보를 리액트 컴포넌트에서 사용가능 하게 해줌
    <BrowserRouter>
        <App />
    </BrowserRouter>
  );