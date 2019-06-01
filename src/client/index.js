import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'scroll-behavior-polyfill';

import App from './App';
if (!localStorage.getItem('isEnglish')) localStorage.setItem('isEnglish', true);
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
