/* 
    ./client/index.js
*/
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import { BrowserRouter } from 'react-router-dom';

console.log('hello')

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
    , document.getElementById('root'));