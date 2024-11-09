import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import {AuthorizationStatus} from './const.ts';
import {offersMock} from './mocks/offersMock.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App placesCount={312} authorizationStatus={AuthorizationStatus.Auth} offers={offersMock} />
  </React.StrictMode>
);
