import {City} from './city.ts';

export type Offer = {
  id: string;
  city: City;
  isPremium: boolean;
  placeCardType: string;
  placeCardName: string;
  price: number;
  imageUrl: string;
  starsCount: 0 | 1 | 2 | 3 | 4 | 5;
  inBookmarks: boolean;
};

export type Offers = Offer[];
