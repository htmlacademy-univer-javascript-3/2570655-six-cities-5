import {Offer, Offers} from '../types/offer.ts';
import {Reviews} from '../types/review.ts';
import {createReducer} from '@reduxjs/toolkit';
import {
  changeCity,
  requireAuthorization,
  setError,
  setNearbyOffers,
  setOffer,
  setOffers,
  setOffersDataLoadingStatus,
  setReviews,
  setUserEmail
} from './action.ts';
import {City} from '../types/city.ts';
import {AuthorizationStatus} from '../const.ts';

type StateType = {
  city: City;
  offers: Offers;
  offer: Offer;
  reviews: Reviews;
  nearbyOffers: Offers;
  authorizationStatus: AuthorizationStatus;
  error: string | null;
  isOffersDataLoading: boolean;
  userEmail: string;
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
  offer: {
    id: '',
    title: '',
    type: '',
    price: 0,
    previewImage: '',
    images: [],
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    },
    location: {
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 13
    },
    host: {
      name: '',
      avatarUrl: '',
      isPro: false,
      email: '',
      token: ''
    },
    isPremium: false,
    isFavorite: false,
    rating: 0,
    bedrooms: 0,
    maxAdults: 0,
  },
  nearbyOffers: [],
  reviews: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  isOffersDataLoading: false,
  userEmail: ''
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
    .addCase(setOffer, (state, { payload }) => {
      state.offer = payload;
    })
    .addCase(setNearbyOffers, (state, { payload }) => {
      state.nearbyOffers = payload;
    })
    .addCase(requireAuthorization, (state, { payload }) => {
      state.authorizationStatus = payload;
    })
    .addCase(setError, (state, { payload }) => {
      state.error = payload;
    })
    .addCase(setOffersDataLoadingStatus, (state, { payload }) => {
      state.isOffersDataLoading = payload;
    })
    .addCase(setUserEmail, (state, { payload }) => {
      state.userEmail = payload;
    });
});
