import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LanguageProvider from './components/LanguageContext';

import './Translations';

export const LanguageContext =  React.createContext();

ReactDOM.render(
  <React.StrictMode>
    <LanguageProvider value="pl">
        <App />
    </LanguageProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
