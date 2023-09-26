import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CurrentMonthContext from './Components/CurrentMonthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CurrentMonthContext>
        <App />
    </CurrentMonthContext>
  </React.StrictMode>
);
