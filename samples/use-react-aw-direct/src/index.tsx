import React from 'react';
import ReactDOM from 'react-dom';

import { applyPolyfills, defineCustomElements } from 'aw-components/loader'

import App from './App';

import './index.css';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

applyPolyfills().then(() => {
  defineCustomElements(window)
})