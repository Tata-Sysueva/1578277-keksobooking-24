const ALERT_SHOW_TIME = 5000;

const body = document.querySelector('body');
const successMessageTemplate = document.querySelector('#success').content;
const successMessage = successMessageTemplate.querySelector('.success');
const errorMessageTemplate = document.querySelector('#error').content;
const errorMessage = errorMessageTemplate.querySelector('.error');

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

const isEscapeKey = (evt) => evt.key === 'Escape';

const renderPopup = (template) => {
  const cloneMessage = template.cloneNode(true);
  body.appendChild(cloneMessage);

  const closePopup = () => {
    cloneMessage.remove();
    document.removeEventListener('keydown', onPopupEscKeydown);
  };

  function onPopupEscKeydown(evt) {
    if (isEscapeKey(evt)) {
      closePopup();
    }
  }

  document.addEventListener('keydown', onPopupEscKeydown);
  cloneMessage.addEventListener('click', closePopup);
};

const renderPopupSuccess = () => {
  renderPopup(successMessage);
};

const renderPopupError = () => {
  renderPopup(errorMessage);
};

export { showAlert, renderPopupSuccess, renderPopupError };
