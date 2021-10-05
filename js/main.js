/* eslint-disable no-unused-vars */

//нахождение целого положительного числа

const getInteger = (min, max) => {
  if (min > max || min < 0) {
    throw new Error('Неправильный диапазон!');
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

//нахождение положительного числа с плавоющей точкой

const getFloatingPointNumber = (min, max, exp) => {
  if (min > max || min < 0) {
    throw new Error('Неправильный диапазон!');
  }

  return Number((Math.random() * (max - min) + min).toFixed(exp));
};

getFloatingPointNumber(1, 100, 3);

// создаём объект author

const padNum = (num) => num.toString().padStart(2,0);

const getAvatar = (min, max) => `img/avatars/user${  padNum(getInteger(min, max))  }.` + 'png';

const author = {
  avatar: getAvatar(1, 10),
};

// создаём объект offer

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

// случайный элемент массива

const getRandomArrayElement = (elements) => elements[getInteger(0, elements.length - 1)];

// массив случайной длины

const createArr = ([...source], maxLength) => Array.from(
  { length: Math.min(source.length, 1 + Math.random() * maxLength | 0) },
  () => source.splice(Math.random() * source.length | 0, 1)[0],
);

//создаём объект offer

const offer = {
  title: 'Best offer!',
  address: `${getFloatingPointNumber(35.65000, 35.70000, 5)  }, ${  getFloatingPointNumber(139.70000, 139.80000, 5)}`, // дописать координаты
  price: getInteger(1, Number.MAX_SAFE_INTEGER),
  type: getRandomArrayElement(TYPE),
  rooms: getInteger(1, Number.MAX_SAFE_INTEGER),
  guests: getInteger(1, Number.MAX_SAFE_INTEGER),
  checkin: getRandomArrayElement(CHECKIN),
  checkout: getRandomArrayElement(CHECKOUT),
  features: createArr(FEATURES, FEATURES.length),
  description: 'Лучший номер!',
  photos: createArr(PHOTOS, PHOTOS.length),
};

// создаём объект location (почему линтер ругается, что у меня якобы уже создана переменная location)

const location1 = {
  lat: getFloatingPointNumber(35.65000, 35.70000, 5),
  lng: getFloatingPointNumber(139.70000, 139.80000, 5),
};


//создаём объявление

const createAdd = () => ({
  author,
  offer,
  location1,
});

createAdd();

// создаём массив с объектами

const COUNT_ELEMENTS_ADD = 10;

const getAdds = Array.from({length: COUNT_ELEMENTS_ADD}, createAdd); // 10

console.log(getAdds);
