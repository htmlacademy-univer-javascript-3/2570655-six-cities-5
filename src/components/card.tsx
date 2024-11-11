import {AppRoute} from '../const.ts';
import {Link} from 'react-router-dom';
import {Offer} from '../types/offer.ts';

export type CardProps = {
    offer: Offer;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}

function Card({offer, onMouseEnter, onMouseLeave}: CardProps){
  const starsWidth = `${offer.starsCount * 20}%`;
  const bookmarkClass = `place-card__bookmark-button ${offer.inBookmarks && 'place-card__bookmark-button--active'} button`;
  return (
    <article className="cities__card place-card" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {offer.isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`${AppRoute.Offer}/${offer.id}`}>
          <img className="place-card__image" src={offer.imageUrl} width="260" height="200" alt="Place image"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">{offer.price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button className={bookmarkClass} type="button">
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark"/>
            </svg>
            {offer.inBookmarks ? <span className="visually-hidden">In bookmarks</span> :
              <span className="visually-hidden">To bookmarks</span>}
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: starsWidth }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}/${offer.id}`}>{offer.placeCardName}</Link>
        </h2>
        <p className="place-card__type">{offer.placeCardType}</p>
      </div>
    </article>
  );
}

export default Card;
