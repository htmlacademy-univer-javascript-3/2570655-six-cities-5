import {City, Location} from './city.ts';
import {User} from './user.ts';

export type Offer = {
  id: string;
  title: string;
  type: string;
  price: number;
  previewImage: string;
  images: string[];
  city: City;
  location: Location;
  host: User;
  isPremium: boolean;
  isFavorite: boolean;
  rating: number;
  bedrooms: number;
  maxAdults: number;
};

export type OfferPageItem = {
  id: string;
  title: string;
  type: string;
  price: number;
  previewImage: string;
  images: string[];
  city: City;
  location: Location;
  isPremium: boolean;
  isFavorite: boolean;
  rating: number;
};

export type Offers = OfferPageItem[];
