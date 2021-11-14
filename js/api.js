const API_URL = 'https://24.javascript.pages.academy/keksobooking';

const errorMessages = {
  failedGetData: 'Упс! Что-то пошло не так',
  failedFormSubmit: 'Не удалось отправить форму. Попробуйте ещё раз',
};

const getData = (onSuccess, onFail) => {
  fetch(`${API_URL}/data`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }

      onFail(errorMessages.failedGetData);
    })
    .then((data) => {
      onSuccess(data);
    })
    .catch (() => {
      onFail(errorMessages.failedGetData);
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch (
    API_URL,
    {
      method: 'POST',
      body,
    },
  )
    .then ((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail(errorMessages.failedFormSubmit);
      }
    })
    .catch (() => {
      onFail(errorMessages.failedFormSubmit);
    });
};

export { getData,sendData };
