import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from './const';
import {ReactElement} from 'react';
import MainScreen from './pages/main.tsx';
import NotFoundScreen from './pages/not-found-screen.tsx';
import Offer from './pages/offer.tsx';
import Favorites from './pages/favorites.tsx';
import Login from './pages/login.tsx';
import PrivateRoute from './private-route.tsx';
import {useAppSelector} from './hooks';
import {LoadingScreen} from './pages/loading-screen.tsx';
import {getAuthorizationStatus} from './store/users/selectors.ts';
import {getOffersDataLoadingStatus} from './store/options/selectors.ts';

function App(): ReactElement {

  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isOffersDataLoading = useAppSelector(getOffersDataLoadingStatus);

  if (authorizationStatus === AuthorizationStatus.Unknown || isOffersDataLoading) {
    return (
      <LoadingScreen />
    );
  }

  return(
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainScreen />}
        />
        <Route
          path={AppRoute.OfferId}
          element={<Offer />}
        />
        <Route
          path={AppRoute.Login}
          element={<Login />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={authorizationStatus}>
              <Favorites/>
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
