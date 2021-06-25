import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './assets/styles/fonts/Recoleta.ttf';
import './assets/styles/fonts/OperatorMono.ttf';
import './assets/styles/fonts/OperatorMonoItalic.ttf';
import './assets/styles/fonts/KaushanScript.ttf';
import './assets/styles/fonts/Pacifico.ttf';
import './assets/styles/fonts/DancingScript.ttf';
import './assets/styles/fonts/JetBrainsMono.ttf';
import './assets/styles/fonts/JetBrainsMonoItalic.ttf';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
