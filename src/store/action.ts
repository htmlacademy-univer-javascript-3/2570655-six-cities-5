import {Offer, Offers} from '../types/offer.ts';
import {createAction} from '@reduxjs/toolkit';
import {City} from '../types/city.ts';
import {Reviews} from '../types/review.ts';
import {AuthorizationStatus} from '../const.ts';

export const setOffers = createAction<Offers>('offers/setOffersList');
export const setOffer = createAction<Offer>('offer/setOffer');
export const setNearbyOffers = createAction<Offers>('nearbyOffers/setNearbyOffers');

export const setFavorites = createAction<Offers>('favorites/setFavorites');
export const editFavorite = createAction<Offer>('favorites/editFavorite');

export const changeCity = createAction<City>('city/changeCity');
export const setReviews = createAction<Reviews>('reviews/setReviews');
export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');
export const setIsReviewSending = createAction<boolean>('reviews/setIsReviewSending');

export const requireAuthorization = createAction<AuthorizationStatus>('requireAuthorization');
export const setError = createAction<string | null>('setError');
export const setUserEmail = createAction<string>('setUserEmail');
