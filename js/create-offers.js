import {getInteger, getFloatingPointNumber, getRandomArrayElement, createRandomArr} from './util.js';

const TYPE = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const CHECKIN = [
  '12:00',
  '13:00',
  '14:00',
];

const CHECKOUT = [
  '12:00',
  '13:00',
  '14:00',
];

const  FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const OFFERS_AMOUNT = 10;

const createAd = (index) => {
  const addLocationLat = getFloatingPointNumber(35.65000, 35.70000, 5);
  const addLocationIng = getFloatingPointNumber(139.70000, 139.80000, 5);

  const avatarImg = index.toString().padStart(2,0);

  return {
    author: {
      avatar: `img/avatars/user${avatarImg}.png`,
    },

    offer: {
      title: 'Best offer!',
      address: `${addLocationLat}, ${addLocationIng}`,
      price: getInteger(1, Number.MAX_SAFE_INTEGER),
      type: getRandomArrayElement(TYPE),
      rooms: getInteger(1, Number.MAX_SAFE_INTEGER),
      guests: getInteger(1, Number.MAX_SAFE_INTEGER),
      checkin: getRandomArrayElement(CHECKIN),
      checkout: getRandomArrayElement(CHECKOUT),
      features: createRandomArr(FEATURES),
      description: 'Лучший номер!',
      photos: createRandomArr(PHOTOS),
    },

    location: {
      lat: addLocationLat,
      lng: addLocationIng,
    },
  };
};

const getAds = (adsCount) => Array.from({length: adsCount}, (item, index) => createAd(index + 1));

getAds(OFFERS_AMOUNT);

export {getAds, OFFERS_AMOUNT, PHOTOS};
