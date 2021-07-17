import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './i18n';
import 'flag-icon-css/css/flag-icon.min.css'

import App from './App';
import reportWebVitals from './reportWebVitals';


const loading = (
  <div className="py-4 text-center">
    <h2>Loading...</h2>
  </div>
)

ReactDOM.render(
  <Suspense fallback={loading}>
    <React.StrictMode>
    <App />
  </React.StrictMode>
  </Suspense>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
