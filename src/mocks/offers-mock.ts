import {Offers} from '../types/offer.ts';

export const offersMock: Offers = [
  {
    id: '1',
    cityMap:
      {
        city: {
          name: 'Amsterdam',
          id: '4',
        },
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 10
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
    cityMap: {
      city: {
        name: 'Amsterdam',
        id: '4',
      },
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 10
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
    cityMap: {
      city: {
        name: 'Amsterdam',
        id: '4',
      },
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 10
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
    cityMap: {
      city: {
        name: 'Amsterdam',
        id: '4',
      },
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 10
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
