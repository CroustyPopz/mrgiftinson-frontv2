import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import GiftService from './gift-service.js'
import './index.css';
import './comics.css';

ReactDOM.render(
  <App service={ new GiftService() }  />,
  document.getElementById('root')
);
