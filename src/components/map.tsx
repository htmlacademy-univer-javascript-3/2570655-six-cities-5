import {useRef, useEffect} from 'react';
import {Marker, layerGroup} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {CityMap} from '../types/city-map.ts';
import {Offer, Offers} from '../types/offer.ts';
import {currentCustomIcon, defaultCustomIcon} from '../const.ts';
import {useMap} from '../hooks/use-map.tsx';

type MapProps = {
  cityMap: CityMap;
  offers: Offers;
  selectedOffer: Offer | undefined;
};

function Map({cityMap, offers, selectedOffer}: MapProps) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, cityMap);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.cityMap.latitude,
          lng: offer.cityMap.longitude
        });

        marker
          .setIcon(
            selectedOffer !== undefined && offer.id === selectedOffer.id
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, selectedOffer]);

  return <div className="cities__map map" style={{height: '500px'}} ref={mapRef}></div>;
}

export default Map;
