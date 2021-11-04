import { renderCard } from './card-popup.js';
import { activatePage } from './form-state.js';

const inputAddress = document.querySelector('#address');

const START_LAT = 35.6898;
const START_LNG = 139.798;

const MAIN_MARKER_LAT = 35.6895;
const MAIN_MARKER_LNG = 139.692;
const FLOAT_POINT = 5;

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

inputAddress.value = `${MAIN_MARKER_LAT}, ${MAIN_MARKER_LNG}`

const createMainMarker = () => (
  L.marker(
    {
      lat: MAIN_MARKER_LAT,
      lng: MAIN_MARKER_LNG,
    },
    {
      draggable: true,
      icon: mainPinIcon,
    },
  )
);

const onActivePage = () => {
  activatePage();
};

const initMap = () => {
  map.setView({
    lat: START_LAT,
    lng: START_LNG,
  }, 12);

  map.on('load', onActivePage());

  const mainMarker = createMainMarker();

  mainMarker.addTo(map);

  mainMarker.on('move', (evt) => {
    const { lat, lng } = evt.target.getLatLng();
    inputAddress.value = `${Number(lat.toFixed(FLOAT_POINT))}, ${Number(lng.toFixed(FLOAT_POINT))}`;
  });
};

export { initMap, renderMarkers };
