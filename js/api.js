const getData = (onSuccess, onError) => () => {
  fetch('https://24.javascript.pages.academy/keksobooking/data')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }

      onError('Упс! Что-то пошло не так');
    })
    .then((data) => {
      onSuccess(data);
    })
    .catch (() => {
      onError('Упс! Что-то пошло не так');
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch(
    'https://24.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail('Не удалось отправить форму. Попробуйте ещё раз');
      }
    })
    .catch (() => {
      onFail('Не удалось отправить форму. Попробуйте ещё раз');
    });
};

export { getData,sendData };
