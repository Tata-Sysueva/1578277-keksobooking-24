/* eslint-disable no-shadow */
import {renderCard} from './card-popup.js';
import {getAds} from './create-offers.js';

const inputAddress = document.querySelector('#address');
const OFFERS_AMOUNT = 10;

const map = L.map('map-canvas');

let mapLoad = false;

map.on('load', () => {
  mapLoad = true;
});

map.setView({
  lat: 35.6898,
  lng: 139.798,
}, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const offersPoints = getAds(OFFERS_AMOUNT);

offersPoints.forEach((cardPopup) => {

  const { lat, lng } = cardPopup.location;

  const icon = L.icon({
    iconUrl: '/img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 20],
  });

  const marker = L.marker(
    {
      lat,
      lng,
    },
    {
      icon,
    },
  );

  marker
    .addTo(map)
    .bindPopup(renderCard(cardPopup));
});

const mainPinIcon = L.icon({
  iconUrl: '/img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [25.5, 25.5],
});

const marker = L.marker(
  {
    lat: 35.6895,
    lng: 139.692,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

marker.addTo(map);

marker.on('moveend', (evt) => {
  const point = evt.target.getLatLng();
  inputAddress.value = `${Number(point.lat.toFixed(5))} ${Number(point.lng.toFixed(5))}`;
});

export{mapLoad};
