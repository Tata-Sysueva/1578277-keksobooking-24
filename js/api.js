const API_URL = 'https://24.javascript.pages.academy/keksobooking';

const errorMesseges = {
  failedGetData: 'Упс! Что-то пошло не так',
  failedFormSubmit: 'Не удалось отправить форму. Попробуйте ещё раз',
};

const getData = (onSuccess, onFail) => {
  fetch(`${API_URL}/data`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }

      onFail(errorMesseges.failedGetData);
    })
    .then((data) => {
      onSuccess(data);
    })
    .catch (() => {
      onFail(errorMesseges.failedGetData);
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch(
    API_URL,
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
        console.log('cool');
      } else {
        onFail(errorMesseges.failedFormSubmit);
      }
    })
    .catch (() => {
      onFail(errorMesseges.failedFormSubmit);
    });
};

export { getData,sendData };
