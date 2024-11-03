import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from './const';
import {ReactElement} from 'react';
import MainScreen from './pages/Main';
import NotFoundScreen from './pages/NotFoundScreen.tsx';
import Offer from './pages/Offer.tsx';
import Favorites from './pages/Favorites.tsx';
import Login from './pages/Login.tsx';
import PrivateRoute from './private-route.tsx';

type AppScreenProps = {
  placesCount: number;
  authorizationStatus: AuthorizationStatus;
}

function App(props: AppScreenProps): ReactElement {
  return(
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainScreen placesCount={props.placesCount} />}
        />
        <Route
          path={AppRoute.Offer}
          element={<Offer />}
        />
        <Route
          path={AppRoute.Login}
          element={<Login />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={props.authorizationStatus}>
              <Favorites />
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
