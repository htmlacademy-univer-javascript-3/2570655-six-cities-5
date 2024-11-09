export enum AppRoute {
  Login = '/login',
  Main = '/',
  Favorites = '/favorites',
  OfferId = '/offer/:id',
  Offer = '/offer'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
