import { renderCard } from './card-popup.js';
import { activatePage } from './form-state.js';
import { getData } from './api.js';
import { showAlert } from './popup.js';

const inputAddress = document.querySelector('#address');

const LAT = 35.6898;
const LNG = 139.798;

const FLOAT_POINT = 5;
const OFFER_COUNT = 10;
const ZOOM = 12;

const map = L.map('map-canvas');
const layer = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const copyright = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const mainPinUrl = '/img/main-pin.svg';
const mainPinSize = [52, 52];
const mainPinAnchor = [26, 52];

const pinUrl = '/img/pin.svg';
const pinSize = [40, 40];
const pinAnchor = [20, 40];

const mainPinIcon = L.icon({
  iconUrl: mainPinUrl,
  iconSize: mainPinSize,
  iconAnchor: mainPinAnchor,
});

const icon = L.icon({
  iconUrl: pinUrl,
  iconSize: pinSize,
  iconAnchor: pinAnchor,
});

L.tileLayer(
  layer,
  {
    attribution: copyright,
  },
).addTo(map);

const renderMarkers = (dataArrPoint) => {
  dataArrPoint.forEach((data) => {
    const { lat, lng } = data.location;

    const marker = L.marker(
      {
        lat,
        lng,
      },
      {
        icon,
      },
    );

    marker.bindPopup(renderCard(data));

    const markerOffers = L.layerGroup([marker]);

    markerOffers.addTo(map);
  });
};

inputAddress.value = `${LAT}, ${LNG}`;

const createMainMarker = () => (
  L.marker(
    {
      lat: LAT,
      lng: LNG,
    },
    {
      draggable: true,
      icon: mainPinIcon,
    },
  )
);

const onDataLoad = (data) => {
  renderMarkers(data.slice(0, OFFER_COUNT));
};

map.on('load', () => {
  activatePage();
  getData(onDataLoad, showAlert);
});

const initMap = () => {
  map.setView({
    lat: LAT,
    lng: LNG,
  }, ZOOM);

  const mainMarker = createMainMarker();

  mainMarker.addTo(map);

  mainMarker.on('move', (evt) => {
    const { lat, lng } = evt.target.getLatLng();
    inputAddress.value = `${Number(lat.toFixed(FLOAT_POINT))}, ${Number(lng.toFixed(FLOAT_POINT))}`;
  });
};

export { initMap };
