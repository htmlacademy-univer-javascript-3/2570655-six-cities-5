import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import {AuthorizationStatus} from './const.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App placesCount={312} authorizationStatus={AuthorizationStatus.NoAuth} />
  </React.StrictMode>
);