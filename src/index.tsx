import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App.Data />
    <hr />
    <App.ContextContainer />
    <hr />
    <App.HOC1 />
    <hr />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
