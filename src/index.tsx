import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import GlobalStyle from './assets/styles/global-style';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

