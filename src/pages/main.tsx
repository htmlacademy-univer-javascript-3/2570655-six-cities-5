import {ReactElement, useEffect, useState} from 'react';
import {OffersList} from '../components/offers-list.tsx';
import {Offers} from '../types/offer.ts';
import {HeaderNav} from '../components/heander-nav.tsx';
import Map from '../components/map.tsx';
import {useAppSelector} from '../hooks';
import {CitiesList} from '../components/cities-list.tsx';
import {CitiesMock} from '../mocks/cities-mock.ts';


function MainScreen() : ReactElement {
  const offers = useAppSelector((state) => state.offers);
  const city = useAppSelector((state) => state.city);

  const [cityOffers, setCurrentCityOffers] = useState<Offers>(offers);
  const [activeOfferId, setActiveOfferId] = useState<string | null>(null);

  const selectedOffer = offers.find((offer) => offer.id === activeOfferId);
  useEffect(() => {
    const filteredOffers = offers.filter((offer) => offer.cityMap.city.name === city.name);
    setCurrentCityOffers(filteredOffers);
  }, [city, offers]);

  return(
    <div className="page page--gray page--main">
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

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList cities={CitiesMock}/>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{cityOffers.length} places to stay in {city.name}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                        Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <OffersList offers={cityOffers} changeActiveOffer={setActiveOfferId}/>
            </section>
            <div className="cities__right-section">
              <Map
                cityMap={offers[0].cityMap}
                offers={cityOffers}
                selectedOffer={selectedOffer}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
