import {Offers} from '../types/offer.ts';

export const offersMock: Offers = [
  {
    id: '1',
    city: {
      name: 'Amsterdam',
      latitude: 52.346456,
      longitude: 4.876876,
      zoom: 18
    },
    placeCardName: 'Beautiful & luxurious apartment at great location',
    placeCardType: 'apartment',
    imageUrl: 'img/apartment-01.jpg',
    starsCount: 1,
    price: 102,
    isPremium: false,
    inBookmarks: false
  },
  {
    id: '2',
    city: {
      name: 'Amsterdam',
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 9
    },
    placeCardName: 'Canal View Prinsengracht',
    placeCardType: 'apartment',
    imageUrl: 'img/apartment-02.jpg',
    starsCount: 2,
    price: 240,
    isPremium: false,
    inBookmarks: true
  },
  {
    id: '3',
    city: {
      name: 'Amsterdam',
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 11
    },
    placeCardName: 'Nice, cozy, warm big bed apartment',
    placeCardType: 'apartment',
    imageUrl: 'img/apartment-03.jpg',
    starsCount: 3,
    price: 505,
    isPremium: true,
    inBookmarks: false
  },
  {
    id: '4',
    city: {
      name: 'Paris',
      latitude: 21.345235,
      longitude: 3.543662,
      zoom: 15
    },
    placeCardName: 'Wood and stone place',
    placeCardType: 'Room',
    imageUrl: 'img/room.jpg',
    starsCount: 4,
    price: 700,
    isPremium: true,
    inBookmarks: true
  }
];
