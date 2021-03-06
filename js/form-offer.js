import { renderPopupSuccess, renderPopupError } from './popup.js';
import { sendData } from './api.js';
import { resetMap } from './map.js';
import { errorMessages } from './util.js';

const VALUE_ROOMS = 100;
const VALUE_GUESTS = 0;
const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;

const offerTitle = document.querySelector('#title');
const offerType = document.querySelector('#type');
const offerPrice = document.querySelector('#price');
const offerRooms = document.querySelector('#room_number');
const offerGuests = document.querySelector('#capacity');
const offerTimeIn = document.querySelector('#timein');
const offerTimeOut = document.querySelector('#timeout');
const offerForm = document.querySelector('.ad-form');
const offerReset = document.querySelector('.ad-form__reset');
const previewAvatar = document.querySelector('.ad-form-header__preview img');
const previewPhotoContainer = document.querySelector('.ad-form__photo');
const formFilter = document.querySelector('.map__filters');

const avatarUrl = '../img/muffin-grey.svg';

const typePlace = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};

const onTitleInvalid = () => {
  if (offerTitle.validity.valueMissing) {
    offerTitle.setCustomValidity(errorMessages.missingValue);
  }
};

const onTitleBlur = () => {
  const valueLength = offerTitle.value.length;

  if (valueLength < MIN_TITLE_LENGTH) {
    offerTitle.setCustomValidity(`Маловато! Ещё ${  MIN_TITLE_LENGTH - valueLength } симв.`);
  } else if (valueLength > MAX_TITLE_LENGTH) {
    offerTitle.setCustomValidity(`Многовато! Удалите лишние ${  valueLength - MAX_TITLE_LENGTH } симв.`);
  } else {
    offerTitle.setCustomValidity('');
  }

  offerTitle.reportValidity();
};

const onTitleInput = () => {
  offerTitle.setCustomValidity(' ');
};

const syncPrice = () => {
  const place = offerType.value;
  offerPrice.min = typePlace[place];
  offerPrice.placeholder = typePlace[place];
};


const onPriceChange = () => {
  syncPrice();
};

const onRoomsChange = () => {
  const rooms = Number(offerRooms.value);
  const guests = Number(offerGuests.value);

  if (rooms < guests) {
    offerGuests.setCustomValidity(errorMessages.wrongValue);
  } else if (rooms === VALUE_ROOMS && guests !== VALUE_GUESTS) {
    offerGuests.setCustomValidity(errorMessages.wrongValue);
  } else if (guests === VALUE_GUESTS && rooms !== VALUE_ROOMS) {
    offerGuests.setCustomValidity(errorMessages.wrongValue);
  } else {
    offerGuests.setCustomValidity('');
  }

  offerGuests.reportValidity();
};

const checkCapacity = () => onRoomsChange();

const onPriceInvalid = () => {
  if (offerPrice.validity.rangeOverflow) {
    offerPrice.setCustomValidity(errorMessages.valueExceeded);
  } else if (offerPrice.validity.valueMissing) {
    offerPrice.setCustomValidity(errorMessages.missingValue);
  } else {
    offerPrice.setCustomValidity('');
  }
};

const onPriceInput = () => {
  offerPrice.setCustomValidity('');
};

const onTimeChange = (evt) => {
  offerTimeIn.value = evt.target.value;
  offerTimeOut.value = offerTimeIn.value;
};

const resetPhotos = () => {
  previewAvatar.src = avatarUrl;

  if (previewPhotoContainer.firstChild) {
    previewPhotoContainer.removeChild(previewPhotoContainer.firstChild);
  }
};

const resetForms = () => {
  resetPhotos();
  offerForm.reset();
  syncPrice();
  formFilter.reset();
};

const onFormReset = (evt) => {
  evt.preventDefault();
  resetForms();
  resetMap();
};

const sendDataSuccess = () => {
  renderPopupSuccess();
  resetForms();
  resetMap();
};

const onFormSubmit = (evt) => {
  evt.preventDefault();
  const formData = new FormData(evt.target);
  checkCapacity();

  if (offerForm.checkValidity()) {
    sendData(sendDataSuccess, renderPopupError, formData);
  }
};

const setFormListeners = () => {
  syncPrice();
  offerTitle.addEventListener('invalid', onTitleInvalid);
  offerTitle.addEventListener('blur', onTitleBlur);
  offerTitle.addEventListener('input', onTitleInput);
  offerType.addEventListener('change', onPriceChange);
  offerPrice.addEventListener('invalid', onPriceInvalid);
  offerPrice.addEventListener('input', onPriceInput);
  offerRooms.addEventListener('change', onRoomsChange);
  offerGuests.addEventListener('change', onRoomsChange);
  offerTimeIn.addEventListener('change', onTimeChange);
  offerTimeOut.addEventListener('change', onTimeChange);
  offerForm.addEventListener('submit', onFormSubmit);
  offerReset.addEventListener('click', onFormReset);
};

export { setFormListeners };
