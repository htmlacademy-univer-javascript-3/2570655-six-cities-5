import {useRef, useEffect} from 'react';
import {Marker, layerGroup} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {City} from '../types/city.ts';
import {OfferPageItem, Offers} from '../types/offer.ts';
import {currentCustomIcon, defaultCustomIcon} from '../const.ts';
import {useMap} from '../hooks/use-map.tsx';

type MapProps = {
  city: City;
  offers: Offers;
  selectedOffer: OfferPageItem | undefined;
};

function Map({city, offers, selectedOffer}: MapProps) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      map.setView([city.location.latitude, city.location.longitude], map.getZoom());
      const markerLayer = layerGroup().addTo(map);
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });

        marker
          .setIcon(
            selectedOffer !== undefined && offer.id === selectedOffer.id
              ? currentCustomIcon
              : defaultCustomIcon,
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, city, offers, selectedOffer]);

  return <div className="cities__map map" style={{height: '500px'}} ref={mapRef}></div>;
}

export default Map;
