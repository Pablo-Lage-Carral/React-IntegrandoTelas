import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import ComponenteTeste from './componenteTeste';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App></App>
    <ComponenteTeste></ComponenteTeste>
  </React.StrictMode>
);


