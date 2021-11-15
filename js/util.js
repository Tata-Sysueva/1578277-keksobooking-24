const DEFAULT_VALUE = 500;

export const errorMessages = {
  failedGetData: 'Упс! Что-то пошло не так',
  failedFormSubmit: 'Не удалось отправить форму. Попробуйте ещё раз',
  missingValue: 'Ой, мы что-то забыли!',
  wrongValue: 'Выберите другой вариант, пожалуйста!',
  valueExceeded: 'Дороговато! Максимальная цена 1 000 000',
};

export function debounce (callback, timeoutDelay = DEFAULT_VALUE) {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}
