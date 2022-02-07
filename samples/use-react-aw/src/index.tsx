import React from 'react';
import ReactDOM from 'react-dom';

// Precisa importar o css pois a lib está exportando
import 'aw-components/dist/aw-components/aw-components.css'

import './index.css';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

