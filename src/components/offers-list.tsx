import Card from './card.tsx';
import {Offers} from '../types/offer.ts';
import {useEffect, useState} from 'react';

type OffersListProps = {
  offers: Offers;
  changeActiveOffer: (offerId: string | null) => void;
}

export function OffersList({offers, changeActiveOffer}: OffersListProps) {
  const [activeOfferId, setActiveOfferId] = useState<string | null>(null);

  useEffect(() => {
    changeActiveOffer(activeOfferId);
  }, [activeOfferId, changeActiveOffer]);

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <Card
          key={offer.id}
          offer={offer}
          onMouseEnter={() => setActiveOfferId(offer.id)}
          onMouseLeave={() => setActiveOfferId(null)}
        />))}
    </div>
  );
}
