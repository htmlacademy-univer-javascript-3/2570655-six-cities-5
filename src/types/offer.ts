import {CityMap} from './city-map.ts';

export type Offer = {
  id: string;
  cityMap: CityMap;
  isPremium: boolean;
  placeCardType: string;
  placeCardName: string;
  price: number;
  imageUrl: string;
  starsCount: 0 | 1 | 2 | 3 | 4 | 5;
  inBookmarks: boolean;
};

export type Offers = Offer[];
