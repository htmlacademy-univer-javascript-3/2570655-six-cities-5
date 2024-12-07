import {useAppDispatch} from '../hooks';
import {changeCity} from '../store/action.ts';
import {City} from '../types/city.ts';

type CitiesListProps = {
  cities: City[];
};

export function CitiesList({ cities }: CitiesListProps) {
  const dispatch = useAppDispatch();

  const handleCityChange = (city: City) => {
    dispatch(changeCity(city));
  };

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
