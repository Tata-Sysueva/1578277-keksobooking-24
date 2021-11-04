const ALERT_SHOW_TIME = 5000;

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

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

export { getInteger, getFloatingPointNumber, getRandomArrayElement, createRandomArr, showAlert };
