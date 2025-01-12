import {createSlice} from '@reduxjs/toolkit';
import {
  changeCity, editFavorite, setFavorites,
  setNearbyOffers,
  setOffer,
  setOffers,
  setReviews
} from '../action.ts';
import {Namespace} from '../../const.ts';
import {City} from '../../types/city.ts';
import {Offer, Offers} from '../../types/offer.ts';
import {Reviews} from '../../types/review.ts';

type OffersStateType = {
  city: City;
  offers: Offers;
  offer: Offer;
  favorites: Offers;
  reviews: Reviews;
  nearbyOffers: Offers;
};

const initialState: OffersStateType = {
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
  favorites: []
};

export const offersReducers = createSlice({
  name: Namespace.Offers,
  initialState,
  reducers: {},
  extraReducers(builder) {
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
      .addCase(setFavorites, (state, { payload }) => {
        state.favorites = payload;
      })
      .addCase(editFavorite, (state, { payload }) => {
        const offer = payload;
        const actualOffer = state.offers.find((o) => o.id === offer.id);
        if (actualOffer) {
          actualOffer.isFavorite = offer.isFavorite;
        }
        const actualNearby = state.nearbyOffers.find((o) => o.id === offer.id);
        if (actualNearby) {
          actualNearby.isFavorite = offer.isFavorite;
        }
        const actualFavorite = state.favorites.find((f) => f.id === offer.id);
        if (offer.isFavorite && !actualFavorite) {
          state.favorites.push(offer);
        }
        if (!offer.isFavorite && actualFavorite) {
          state.favorites = state.favorites.filter((f) => f.id !== offer.id);
        }
        if (state.offer && state.offer.id === offer.id) {
          state.offer.isFavorite = offer.isFavorite;
        }
      });
  }
});
