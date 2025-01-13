import {memo, useCallback, useState} from 'react';

type SortingOptionsProps = {
  sortOption: string;
  setSortOption: (sortOption: string) => void;
}

function SortingOptionsComponent({ sortOption, setSortOption }: SortingOptionsProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = useCallback(
    (option: string) => {
      setSortOption(option);
      setIsOpen(false);
    },
    [setSortOption]
  );

  const toggleOptions = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <div>
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by  </span>
        <span className="places__sorting-type" tabIndex={0} onClick={toggleOptions}>
          {sortOption}
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        {isOpen && (
          <ul className="places__options places__options--custom places__options--opened">
            <li className={'places__option popular'}
              tabIndex={0}
              onClick={() => handleOptionClick('Popular')}
            >
              Popular
            </li>
            <li className={'places__option Price: low to high'}
              tabIndex={0}
              onClick={() => handleOptionClick('Price: low to high')}
            >
              Price: low to high
            </li>
            <li className={'places__option Price: high to low'}
              tabIndex={0}
              onClick={() => handleOptionClick('Price: high to low')}
            >
              Price: high to low
            </li>
            <li className={'places__option Top rated first'}
              tabIndex={0}
              onClick={() => handleOptionClick('Top rated first')}
            >
              Top rated first
            </li>
          </ul>
        )}
      </form>
    </div>);
}

export const SortingOptions = memo(SortingOptionsComponent);
