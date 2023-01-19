import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';


const root = ReactDOM.createRoot(document.getElementById('root'));
document.body.style.margin="auto";
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);