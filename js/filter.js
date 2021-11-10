import { clearMarkers, renderMarkers } from './map.js';
import { debounce } from './util.js';

const formFilter = document.querySelector('.map__filters');
const formFilterType = formFilter.querySelector('#housing-type');
const formFilterPrice = formFilter.querySelector('#housing-price');
const formFilterRooms = formFilter.querySelector('#housing-rooms');
const formFilterGuests = formFilter.querySelector('#housing-guests');

const OFFER_COUNT = 10;
const OFFER_DEFAULT = 'any';

const OfferPrice = {
  low: 'low',
  middle: 'middle',
  high: 'high',
  min: 10000,
  max: 50000,
};

const isTypeRight = ({ offer }) => offer.type === formFilterType.value || formFilterType.value === OFFER_DEFAULT;

const isPriceRight = ({ offer }) => {
  const price = offer.price;
  if ((price < OfferPrice.min) && formFilterPrice.value === OfferPrice.low) {
    return true;
  } else if ((OfferPrice.min <= price && price <= OfferPrice.max ) && formFilterPrice.value === OfferPrice.middle) {
    return true;
  } else if ((price > OfferPrice.max ) && formFilterPrice.value === OfferPrice.high) {
    return true;
  } else if (formFilterPrice.value === OFFER_DEFAULT) {
    return true;
  }
};

const isRoomsRight = ({ offer }) => {
  const rooms = Number(offer.rooms);
  const filterRooms = Number(formFilterRooms.value);
  if (rooms === filterRooms || formFilterRooms.value === OFFER_DEFAULT) {
    return true;
  }
};

const isGuestsRight = ({ offer }) => {
  const rooms = Number(offer.guests);
  const filterGuests = Number(formFilterGuests.value);
  if (rooms === filterGuests || formFilterGuests.value === OFFER_DEFAULT) {
    return true;
  }
};

const isFeaturesRight = ({ offer }) => {
  const features = offer.features;
  const checkedFeatures = Array.from(formFilter.querySelectorAll('.map__checkbox:checked'));

  if (features && features.length > 0) {
    if (checkedFeatures.every((feature) => features.includes(feature.value))) {
      return true;
    }
  }

  return false;
};

const isOfferRight = (data) => {
  if (isTypeRight(data) && isPriceRight(data) && isRoomsRight(data) && isGuestsRight(data) && isFeaturesRight(data)) {
    return true;
  }
};

const filterOffers = (data) => data.filter(isOfferRight).slice(0, OFFER_COUNT);

const onFilterMapChange = (data) => {
  filterOffers(data);
  clearMarkers();
  renderMarkers(filterOffers(data));
};

const getFilterOffers = (dataOffers) => {
  formFilter.addEventListener('change', debounce(() => {
    onFilterMapChange(dataOffers);
  }));
};

export { getFilterOffers };
