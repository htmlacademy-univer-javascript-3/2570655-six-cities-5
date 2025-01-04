import {ReactElement, useEffect, useState} from 'react';
import {OffersList} from '../components/offers-list.tsx';
import {Offers} from '../types/offer.ts';
import {HeaderNav} from '../components/heander-nav.tsx';
import Map from '../components/map.tsx';
import {useAppSelector} from '../hooks';
import {CitiesList} from '../components/cities-list.tsx';
import {SortingOptions} from '../components/sorting-options.tsx';


function MainScreen() : ReactElement {
  const offers = useAppSelector((state) => state.offers);
  const city = useAppSelector((state) => state.city);
  const cities = offers.map((offer) => offer.city)
    .filter((cityFilter, index, self) => self.findIndex((x) => x.name === cityFilter.name) === index);
  const [cityOffers, setCurrentCityOffers] = useState<Offers>(offers);
  const [activeOfferId, setActiveOfferId] = useState<string | null>(null);
  const selectedOffer = offers.find((offer) => offer.id === activeOfferId);
  const [sortOption, setSortOption] = useState<string>('popular');
  const [sortedOffers, setSortedOffers] = useState<Offers>(cityOffers);

  useEffect(() => {
    const sortedArray = [...cityOffers];

    if (sortOption === 'Price: low to high') {
      sortedArray.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'Price: high to low') {
      sortedArray.sort((a, b) => b.price - a.price);
    } else if (sortOption === 'Top rated first') {
      sortedArray.sort((a, b) => b.rating - a.rating);
    }
    setSortedOffers(sortedArray);
  }, [cityOffers, sortOption, sortedOffers]);

  useEffect(() => {
    const filteredOffers = offers.filter((offer) => offer.city.name === city.name);
    setCurrentCityOffers(filteredOffers);
  }, [city, offers]);

  return(
    <div className="page page--gray page--main">
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
            <HeaderNav favoritesCount={offers.filter((x) => x.isFavorite).length}/>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList cities={cities}/>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{cityOffers.length} places to stay in {city.name}</b>
              <SortingOptions sortOption={sortOption} setSortOption={setSortOption}/>
              <OffersList offers={sortedOffers} changeActiveOffer={setActiveOfferId}/>
            </section>
            <div className="cities__right-section">
              <Map
                city={city}
                offers={sortedOffers}
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
