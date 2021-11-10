const DEFOULT_VALUE = 500;

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

const debounce = (callback, timeoutDelay = DEFOULT_VALUE) => {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export {
  getInteger,
  getFloatingPointNumber,
  getRandomArrayElement,
  createRandomArr,
  debounce
};
