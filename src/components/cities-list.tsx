import {useAppDispatch} from '../hooks';
import {changeCity} from '../store/action.ts';
import {City} from '../types/city.ts';
import {memo, useCallback} from 'react';

type CitiesListProps = {
  cities: City[];
};

export function CitiesListComponent({ cities }: CitiesListProps) {
  const dispatch = useAppDispatch();

  const handleCityChange = useCallback(
    (city: City) => {
      dispatch(changeCity(city));
    },
    [dispatch]
  );

  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => (
        <li
          key={city.name}
          className="locations__item"
          onClick={() => handleCityChange(city)}
        >
          <a className="locations__item-link tabs__item" href="#">
            <span>{city.name}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export const CitiesList = memo(CitiesListComponent);
