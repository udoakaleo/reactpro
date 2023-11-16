import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Banner from './restuarant/Banner.js';
import {Category} from './restuarant/category.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals



let ban= ReactDOM.createRoot(document.getElementById("banner"));
ban.render(<Banner/>);
let cat = ReactDOM.createRoot(document.getElementById("category"));
cat.render(<Category/>);
let myform= ReactDOM.createRoot(document.getElementById("forms"));
myform.render();