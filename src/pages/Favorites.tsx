import {HeaderNav} from '../components/heander-nav.tsx';
import { Offers } from '../types/offer.ts';
import { Link } from 'react-router-dom';
import {AppRoute} from '../const.ts';

type FavoritesScreenProps = {
  offers: Offers;
};

export default function FavoritesScreen({offers}: FavoritesScreenProps) {
  const favorites = offers.filter((offer) => offer.inBookmarks);

  const cities = Array.from(new Set(favorites.map((offer) => offer.city.name))).sort();

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img
                  className="header__logo"
                  src="img/logo.svg"
                  alt="6 cities logo"
                  width={81}
                  height={41}
                />
              </a>
            </div>
            <HeaderNav offers={offers}/>
          </div>
        </div>
      </header>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {cities.length > 0 ? (
                cities.map((city) => (
                  <li key={city} className="favorites__locations-items">
                    <div className="favorites__locations locations locations--current">
                      <div className="locations__item">
                        <Link className="locations__item-link" to="#">
                          <span>{city}</span>
                        </Link>
                      </div>
                    </div>
                    <div className="favorites__places">
                      {favorites
                        .filter((favorite) => favorite.city.name === city)
                        .map((favorite) => (
                          <article key={favorite.id} className="favorites__card place-card">
                            {favorite.isPremium &&
                              <div className="place-card__mark">
                                <span>Premium</span>
                              </div>}
                            <div className="favorites__image-wrapper place-card__image-wrapper">
                              <Link to={`${AppRoute.Offer}/${favorite.id}`}>
                                <img className="place-card__image" src={favorite.imageUrl} width="150" height="110" alt="Place image" />
                              </Link>
                            </div>
                            <div className="favorites__card-info place-card__info">
                              <div className="place-card__price-wrapper">
                                <div className="place-card__price">
                                  <b className="place-card__price-value">&euro;{favorite.price}</b>
                                  <span className="place-card__price-text">&#47;&nbsp;night</span>
                                </div>
                                <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
                                  <svg className="place-card__bookmark-icon" width="18" height="19">
                                    <use xlinkHref="#icon-bookmark"></use>
                                  </svg>
                                  <span className="visually-hidden">In bookmarks</span>
                                </button>
                              </div>
                              <div className="place-card__rating rating">
                                <div className="place-card__stars rating__stars">
                                  <span style={{ width: `${favorite.starsCount * 20}%` }}></span>
                                  <span className="visually-hidden">Rating</span>
                                </div>
                              </div>
                              <h2 className="place-card__name">
                                <Link to={`${AppRoute.Offer}/${favorite.id}`}>{favorite.placeCardName}</Link>
                              </h2>
                              <p className="place-card__type">{favorite.placeCardType}</p>
                            </div>
                          </article>
                        ))}
                    </div>
                  </li>
                ))
              ) : (
                <li style={{textAlign: 'center', marginTop: '15%', fontSize: '32px'}}>Nothing yet saved</li>
              )}
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </a>
      </footer>
    </div>
  );
}
