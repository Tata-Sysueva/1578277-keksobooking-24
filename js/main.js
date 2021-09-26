const generateRandomNumber = (min, max) => Math.random() * (max - min + 1);

const getInteger = (min, max) => {
  if (min > max || min < 0) {
    throw new Error('Неправильный диапазон!');
  }

  return Math.round(generateRandomNumber(min,max)) + min;
};

getInteger(1, 100);

const getFloatingPointNumber = (min, max, exp) => {
  if (min > max || min < 0) {
    throw new Error('Неправильный диапазон!');
  }

  return +(generateRandomNumber(min,max)).toFixed(exp);
};

getFloatingPointNumber(1, 100, 3);
