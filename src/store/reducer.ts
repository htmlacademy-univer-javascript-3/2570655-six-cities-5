import {Offers} from '../types/offer.ts';
import {Reviews} from '../types/review.ts';
import {createReducer} from '@reduxjs/toolkit';
import {changeCity, setOffers, setReviews} from './action.ts';
import {City} from '../types/city.ts';
import {offersMock} from '../mocks/offers-mock.ts';
import {reviewsMock} from '../mocks/reviews-mock.ts';

type StateType = {
  city: City;
  offers: Offers;
  reviews: Reviews;
};

const initialState: StateType = {
  city: {
    name: 'Amsterdam',
    id: '1'
  },
  offers: [],
  reviews: [],
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, { payload }) => {
      state.city = payload;
    })
    .addCase(setOffers, (state) => {
      state.offers = offersMock;
    })
    .addCase(setReviews, (state) => {
      state.reviews = reviewsMock;
    });
});
