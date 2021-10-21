const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;

const offerTitle = document.querySelector('#title');
const offerType = document.querySelector('#type');
const offerPrice = document.querySelector('#price');
//const offerRooms = document.querySelector('#room_number');
//const offerGuests = document.querySelector('#capacity');

const onCheckTitle = offerTitle.addEventListener('invalid', () => {
  if (offerTitle.validity.valueMissing) {
    offerTitle.setCustomValidity('Ой, мы что-то забыли!');
  }
});

const onCheckLengthTitle = offerTitle.addEventListener('input', () => {
  const valueLength = offerTitle.value.length;

  if (valueLength < MIN_TITLE_LENGTH) {
    offerTitle.setCustomValidity(`Ещё ${  MIN_TITLE_LENGTH - valueLength } симв.`);
  } else if (valueLength > MAX_TITLE_LENGTH) {
    offerTitle.setCustomValidity(`Удалите лишние ${  valueLength - MAX_TITLE_LENGTH } симв.`);
  } else {
    offerTitle.setCustomValidity('');
  }

  offerTitle.reportValidity();
});

const onChangeMinPrice = offerType.addEventListener('change', () => {
  if (offerType.value === 'flat') {
    offerPrice.setAttribute('min', 1000);
    offerPrice.placeholder = '1000';
  } else if (offerType.value === 'hotel') {
    offerPrice.setAttribute('min', 3000);
    offerPrice.placeholder = '3000';
  } else if (offerType.value === 'house') {
    offerPrice.setAttribute('min', 5000);
    offerPrice.placeholder = '5000';
  } else if (offerType.value === 'palace') {
    offerPrice.setAttribute('min', 10000);
    offerPrice.placeholder = '10000';
  } else {
    offerPrice.setAttribute('min', 0);
    offerPrice.placeholder = '0';
  }
});

const onCheckMaxPrice = offerPrice.addEventListener('invalid', () => {
  if (offerPrice.validity.rangeOverflow) {
    offerPrice.setCustomValidity('Дороговато! Максимальная цена 1 000 000');
  } else if (offerPrice.validity.valueMissing) {
    offerPrice.setCustomValidity('Ой, мы что-то забыли!');
  } else {
    offerPrice.setCustomValidity('');
  }
});

// const onCheckRooms = offerRooms.addEventListener('change', () => {
//   if (offerRooms.value === 1) {
//     offerGuests.setCustomValidity('1!');
//   } else if (offerRooms.value === 2) {
//     offerGuests.setCustomValidity('2');
//   } else if (offerRooms.value === 3) {
//     offerGuests.setCustomValidity('3');
//   } else if (offerRooms.value === 0) {
//     offerGuests.setCustomValidity('0');
//   } else {
//     offerGuests.setCustomValidity('');
//   }
// });

const checkForm = () => {
  onCheckTitle;
  onCheckLengthTitle;
  onChangeMinPrice;
  onCheckMaxPrice;
  //onCheckRooms;
};

export {checkForm};
