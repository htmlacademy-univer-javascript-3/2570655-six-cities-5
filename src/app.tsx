import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from './const';
import {ReactElement} from 'react';
import MainScreen from './pages/Main';
import NotFoundScreen from './pages/NotFoundScreen.tsx';
import Offer from './pages/Offer.tsx';
import Favorites from './pages/Favorites.tsx';
import Login from './pages/Login.tsx';
import PrivateRoute from './private-route.tsx';
import {Offers} from './types/offer.ts';

type AppScreenProps = {
  placesCount: number;
  authorizationStatus: AuthorizationStatus;
  offers: Offers;
}

function App({placesCount, authorizationStatus, offers}: AppScreenProps): ReactElement {
  return(
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainScreen placesCount={placesCount} offers={offers} />}
        />
        <Route
          path={AppRoute.OfferId}
          element={<Offer offers={offers}/>}
        />
        <Route
          path={AppRoute.Login}
          element={<Login />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={authorizationStatus}>
              <Favorites offers={offers}/>
            </PrivateRoute>
          }
        />
        <Route
          path="*"
          element={<NotFoundScreen />}
        />
      </Routes>
    </BrowserRouter>);
}

export default App;
