/* eslint-disable id-length */
/* eslint-disable no-unused-vars */
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

const getInteger = (min, max) => {
  if (min > max || min < 0) {
    throw new Error('Неправильный диапазон!');
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getFloatingPointNumber = (min, max, exp) => {
  if (min > max || min < 0) {
    throw new Error('Неправильный диапазон!');
  }

  return Number((Math.random() * (max - min) + min).toFixed(exp));
};

const getRandomArrayElement = (elements) => elements[getInteger(0, elements.length - 1)];

const shuffle = (array) => {
  const copyArray = array.slice();

  for (let i = copyArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copyArray[i], copyArray[j]] = [copyArray[j], copyArray[i]];
  }

  return array;
};

const createRandomArr = (array) => shuffle(array).slice(0, getInteger(0, array.length - 1));

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

console.log(getAds(OFFERS_AMOUNT));
