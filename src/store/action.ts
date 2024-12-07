import {Offers} from '../types/offer.ts';
import {createAction} from '@reduxjs/toolkit';
import {City} from '../types/city.ts';
import {Reviews} from '../types/review.ts';

export const setOffers = createAction<Offers>('offers/setOffersList');
export const changeCity = createAction<City>('city/changeCity');
export const setReviews = createAction<Reviews>('reviews/setReviews');
