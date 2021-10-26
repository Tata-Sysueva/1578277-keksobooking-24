const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;

const offerTitle = document.querySelector('#title');
const offerType = document.querySelector('#type');
const offerPrice = document.querySelector('#price');
const offerRooms = document.querySelector('#room_number');
const offerGuests = document.querySelector('#capacity');

console.log(offerGuests);
console.log(offerRooms);
const typePlace = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};

const onTitleInvalid = () => {
  if (offerTitle.validity.valueMissing) {
    offerTitle.setCustomValidity('Ой, мы что-то забыли!');
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
  const place = offerType.value; //house // palace
  offerPrice.min = typePlace[place];
  offerPrice.placeholder = typePlace[place];
};


const onPriceChange = () => {
  syncPrice();
};

const onCheckRooms = () => {
 // const rooms = offerRooms.value;
  //const guests = offerGuests.value;
 console.log('тык');

};

const onPriceInvalid = () => {
  if (offerPrice.validity.rangeOverflow) {
    offerPrice.setCustomValidity('Дороговато! Максимальная цена 1 000 000');
  } else if (offerPrice.validity.valueMissing) {
    offerPrice.setCustomValidity('Ой, мы что-то забыли!');
  } else {
    offerPrice.setCustomValidity('');
  }
};

const onPriceInput = () => {
  offerPrice.setCustomValidity(' ');
};

const setFormListeners = () => {
  syncPrice();
  offerTitle.addEventListener('invalid', onTitleInvalid);
  offerTitle.addEventListener('blur', onTitleBlur);
  offerTitle.addEventListener('input', onTitleInput);
  offerType.addEventListener('change', onPriceChange);
  offerPrice.addEventListener('invalid', onPriceInvalid);
  offerPrice.addEventListener('input', onPriceInput);
  offerRooms.addEventListener('change', onCheckRooms);
  offerGuests.addEventListener('change', onCheckRooms);
};

export {setFormListeners};
