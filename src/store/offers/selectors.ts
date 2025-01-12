import {State} from '../../types/state';
import {Namespace} from '../../const';

export const getCity = (state: Pick<State, Namespace.Offers>) => state[Namespace.Offers].city;
export const getOffers = (state: Pick<State, Namespace.Offers>) => state[Namespace.Offers].offers;
export const getOffer = (state: Pick<State, Namespace.Offers>) => state[Namespace.Offers].offer;
export const getReviews = (state: Pick<State, Namespace.Offers>) => state[Namespace.Offers].reviews;
export const getNearbyOffers = (state: Pick<State, Namespace.Offers>) => state[Namespace.Offers].nearbyOffers;
