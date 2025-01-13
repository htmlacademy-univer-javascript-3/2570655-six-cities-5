import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AppDispatch, State} from '../types/state.ts';
import {
  editFavorite,
  requireAuthorization, setFavorites, setIsReviewSending,
  setNearbyOffers,
  setOffer,
  setOffers,
  setOffersDataLoadingStatus,
  setReviews,
  setUserEmail
} from '../store/action.ts';
import {Offer, Offers} from '../types/offer.ts';
import {APIRoute, AuthorizationStatus, Namespace} from '../const.ts';
import {User} from '../types/user.ts';
import {dropToken, saveToken} from './api.ts';
import {AuthData} from '../types/auth-data.ts';
import {Review, ReviewRequest, Reviews} from '../types/review.ts';
import {FavoriteRequest} from '../types/favorite.ts';

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setOffersDataLoadingStatus(true));
    const {data} = await api.get<Offers>(APIRoute.Offers);
    dispatch(setOffers(data));
    dispatch(setOffersDataLoadingStatus(false));
  },
);

export const fetchOfferAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffer',
  async (offerId, { dispatch, extra: api }) => {
    const { data: newOffer } = await api.get<Offer>(`${APIRoute.Offers }/${ offerId }`);
    dispatch(setOffer(newOffer));
    const { data: newReviews } = await api.get<Reviews>(`${APIRoute.Comments }/${ offerId }`);
    dispatch(setReviews(newReviews));
    const { data: newNearbyOffers } = await api.get<Offers>(`${APIRoute.Offers }/${ offerId }/nearby`);
    dispatch(setNearbyOffers(newNearbyOffers));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const response = await api.get(APIRoute.Login);
      const data = response.data as { email: string };
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(setUserEmail(data.email));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password: password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<User>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(setUserEmail(email));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);

export const sendReviewAction = createAsyncThunk<void, ReviewRequest, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/sendReview',
  async ({offerId, comment, rating}, {dispatch, extra: api}) => {
    dispatch(setIsReviewSending(true));
    await api.post<Review>(`${APIRoute.Comments }/${ offerId }`, {comment, rating: Number(rating)});
    const { data: newReviews } = await api.get<Reviews>(`${APIRoute.Comments }/${ offerId }`);
    dispatch(setReviews(newReviews));
    dispatch(setIsReviewSending(false));
  }
);

export const fetchFavoritesAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFavorites',
  async (_arg, {dispatch, getState, extra: api}) => {
    if (getState()[Namespace.User].authorizationStatus === AuthorizationStatus.Auth) {
      const {data} = await api.get<Offers>(APIRoute.Favorite);
      dispatch(setFavorites(data));
    }
  }
);

export const editFavoriteStatusAction = createAsyncThunk<void, FavoriteRequest, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/editFavoriteStatus',
  async ({offerId, status}, {dispatch, extra: api}) => {
    const url = `${APIRoute.Favorite }/${ offerId }/${ status }`;
    const {data} = await api.post<Offer>(url);
    dispatch(editFavorite(data));
  }
);
