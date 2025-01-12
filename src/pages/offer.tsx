import {useParams} from 'react-router-dom';
import {HeaderNav} from '../components/heander-nav.tsx';
import {ReviewSendingForm} from '../components/review-sending-form.tsx';
import {useAppDispatch, useAppSelector} from '../hooks';
import React, {useCallback, useEffect, useMemo} from 'react';
import {editFavoriteStatusAction, fetchOfferAction} from '../api/api-requests.ts';
import {LoadingScreen} from './loading-screen.tsx';
import {OffersList} from '../components/offers-list.tsx';
import {AuthorizationStatus} from '../const.ts';
import {Map} from '../components/map.tsx';
import {getFavorites, getNearbyOffers, getOffer, getReviews} from '../store/offers/selectors.ts';
import {getOffersDataLoadingStatus} from '../store/options/selectors.ts';
import {getAuthorizationStatus} from '../store/users/selectors.ts';


function Offer() {
  const dispatch = useAppDispatch();
  const offer = useAppSelector(getOffer);
  const favorites = useAppSelector(getFavorites);
  const nearbyOffers = useAppSelector(getNearbyOffers).slice(0, 3);
  const reviews = useAppSelector(getReviews);
  const isOffersDataLoading = useAppSelector(getOffersDataLoadingStatus);
  const params = useParams();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  useEffect(() => {
    if (params.id) {
      dispatch(fetchOfferAction(params.id));
    }
  }, [dispatch, params.id]);

  const renderReviews = useCallback(() => reviews.map((review) => (
    <li key={review.id} className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={review.user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {review.user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: review.rating * 20 }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {review.comment}
        </p>
        <time className="reviews__time" dateTime={review.date}>{review.date}</time>
      </div>
    </li>
  )), [reviews]);

  const renderOfferImages = useMemo(() => offer.images.map((image) => (
    <div key={image} className="offer__image-wrapper">
      <img className="offer__image" src={image} alt="Photo studio" />
    </div>
  )), [offer.images]);

  function handleBookmarkClick() {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      dispatch(editFavoriteStatusAction({offerId: offer.id, status: offer.isFavorite ? 0 : 1}));
    }
  }

  if (isOffersDataLoading || !offer) {
    return <LoadingScreen />;
  }

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active" href="/">
                <img
                  className="header__logo"
                  src="public/img/logo.svg"
                  alt="6 cities logo"
                  width={81}
                  height={41}
                />
              </a>
            </div>
            <HeaderNav favoritesCount={favorites.length} />
          </div>
        </div>
      </header>

      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {renderOfferImages}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {offer.isPremium && (
                <div className="offer__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {offer.title}
                </h1>
                <button className={`offer__bookmark-button ${offer.isFavorite && 'offer__bookmark-button--active'} button`}
                  type="button" onClick={handleBookmarkClick}
                >
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">{offer.isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width: `calc(100% / 5 * ${offer.rating})` }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{offer.rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  Apartment
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  3 Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max 4 adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{offer.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  <li className="offer__inside-item">
                    Wi-Fi
                  </li>
                  <li className="offer__inside-item">
                    Washing machine
                  </li>
                  <li className="offer__inside-item">
                    Towels
                  </li>
                  <li className="offer__inside-item">
                    Heating
                  </li>
                  <li className="offer__inside-item">
                    Coffee machine
                  </li>
                  <li className="offer__inside-item">
                    Baby seat
                  </li>
                  <li className="offer__inside-item">
                    Kitchen
                  </li>
                  <li className="offer__inside-item">
                    Dishwasher
                  </li>
                  <li className="offer__inside-item">
                    Cabel TV
                  </li>
                  <li className="offer__inside-item">
                    Fridge
                  </li>
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="offer__avatar user__avatar" src={offer.host.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="offer__user-name">
                    {offer.host.name}
                  </span>
                  <span className="offer__user-status">
                    {offer.host.isPro ? 'Pro' : 'Default'}
                  </span>
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
                  </p>
                  <p className="offer__text">
                    An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
                  </p>
                </div>
              </div>
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                <ul className="reviews__list">
                  {renderReviews()}
                </ul>
                {authorizationStatus === AuthorizationStatus.Auth && <ReviewSendingForm />}
              </section>
            </div>
          </div>
          <Map
            city={offer.city}
            offers={nearbyOffers.concat(offer)}
            selectedOffer={offer}
          />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <OffersList offers={nearbyOffers} changeActiveOffer={() => null} />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

const OfferScreen = React.memo(Offer);
export default OfferScreen;
