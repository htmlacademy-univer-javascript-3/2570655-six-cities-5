import {AppRoute, AuthorizationStatus} from '../const.ts';
import {Link} from 'react-router-dom';
import {OfferPageItem} from '../types/offer.ts';
import {editFavoriteStatusAction} from '../api/api-requests.ts';
import {useAppDispatch, useAppSelector} from '../hooks';
import {getAuthorizationStatus} from '../store/users/selectors.ts';

export type CardProps = {
    offer: OfferPageItem;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}

function Card({offer, onMouseEnter, onMouseLeave}: CardProps){
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const starsWidth = `${Math.round(offer.rating) * 20}%`;

  function handleBookmarkClick() {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      dispatch(editFavoriteStatusAction({offerId: offer.id, status: offer.isFavorite ? 0 : 1}));
    }
  }

  return (
    <article className="cities__card place-card" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {offer.isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`${AppRoute.Offer}/${offer.id}`}>
          <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt="Place image"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">{offer.price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${offer.isFavorite && 'place-card__bookmark-button--active'} button`}
            type="button" onClick={handleBookmarkClick}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">{offer.isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: starsWidth}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}/${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

export default Card;
