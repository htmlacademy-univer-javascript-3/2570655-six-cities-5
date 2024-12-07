import { Reviews } from '../types/review';

export const reviewsMock: Reviews = [
  {
    id: 'e60e1c94-969c-4eed-8448-437eb57127eb',
    comment: 'This villa is perfect',
    date: '2022-05-20',
    rating: 3,
    user: {
      name: 'Dan',
      avatarUrl: 'https://14.design.htmlacademy.pro/static/avatar/5.jpg',
      isPro: false
    }
  },
  {
    id: '2bf8f015-509f-448d-948e-a84a4d7e6155',
    comment: 'The house is very good',
    date: '2023-09-12',
    rating: 4,
    user: {
      name: 'Max',
      avatarUrl: 'https://14.design.htmlacademy.pro/static/avatar/5.jpg',
      isPro: false
    }
  }
];
