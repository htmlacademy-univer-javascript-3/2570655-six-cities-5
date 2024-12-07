import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from './const';
import {ReactElement} from 'react';
import MainScreen from './pages/main.tsx';
import NotFoundScreen from './pages/not-found-screen.tsx';
import Offer from './pages/offer.tsx';
import Favorites from './pages/favorites.tsx';
import Login from './pages/login.tsx';
import PrivateRoute from './private-route.tsx';
import {setOffers} from './store/action.ts';
import {useAppDispatch, useAppSelector} from './hooks';

function App(): ReactElement {
  const offers = useAppSelector((state) => state.offers);
  const dispatch = useAppDispatch();
  dispatch(setOffers(offers));

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
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
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
