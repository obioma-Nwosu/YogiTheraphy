import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './i18n';
import 'flag-icon-css/css/flag-icon.min.css'

import App from './App';


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

