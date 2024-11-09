import Card from './card.tsx';
import {Offers} from '../types/offer.ts';

type OffersListProps = {
  offers: Offers;
}

export function OffersList({offers}: OffersListProps) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <Card key={offer.id} offer={offer} />
      ))}
    </div>);
}
