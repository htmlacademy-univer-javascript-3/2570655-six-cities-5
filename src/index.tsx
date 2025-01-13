import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import {Provider} from 'react-redux';
import {store} from './store';
import {checkAuthAction, fetchFavoritesAction, fetchOffersAction} from './api/api-requests.ts';


store.dispatch(fetchOffersAction());
store.dispatch(checkAuthAction());
store.dispatch(fetchFavoritesAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>
);
