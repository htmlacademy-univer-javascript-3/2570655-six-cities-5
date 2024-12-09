import {Offers} from '../types/offer.ts';
import {Reviews} from '../types/review.ts';
import {createReducer} from '@reduxjs/toolkit';
import {
  changeCity,
  requireAuthorization,
  setError,
  setOffers,
  setOffersDataLoadingStatus,
  setReviews
} from './action.ts';
import {City} from '../types/city.ts';
import {AuthorizationStatus} from '../const.ts';

type StateType = {
  city: City;
  offers: Offers;
  reviews: Reviews;
  authorizationStatus: AuthorizationStatus;
  error: string | null;
  isOffersDataLoading: boolean;
};

const initialState: StateType = {
  city: {
    name: 'Amsterdam',
    location: {
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 13
    }
  },
  offers: [],
  reviews: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  isOffersDataLoading: false,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, { payload }) => {
      state.city = payload;
    })
    .addCase(setOffers, (state, { payload }) => {
      state.offers = payload;
    })
    .addCase(setReviews, (state, { payload }) => {
      state.reviews = payload;
    })
    .addCase(requireAuthorization, (state, { payload }) => {
      state.authorizationStatus = payload;
    })
    .addCase(setError, (state, { payload }) => {
      state.error = payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, { payload }) => {
      state.isOffersDataLoading = payload;
    });
});
