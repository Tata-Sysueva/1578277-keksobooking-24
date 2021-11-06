const cardTemplate = document.querySelector('#card').content;
const cardArticle = cardTemplate.querySelector('.popup');

const typesPlace = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};

const fillFeat = (array, block) => {
  array.forEach((element) => {
    const newFeat = `<li class="popup__feature popup__feature--${element}"></li>`;
    block.insertAdjacentHTML('beforeend', newFeat);
  });
};

const fillPhotos = (photos, photo, block) => {
  photos.forEach((element) => {
    const photoNew = photo.cloneNode(true);
    photoNew.src = element;
    block.appendChild(photoNew);
  });
};

const checkContent = (arrField) => {
  arrField.forEach((element) => {
    if (element.textContent === '' || arrField.length < 0) {
      element.remove();
    }
  });
};

const renderCard = ({ offer, author }) => {
  const {
    title,
    address,
    price,
    type,
    rooms,
    guests,
    checkin,
    checkout,
    features,
    description,
    photos,
  } = offer;

  const { avatar } = author;


  const cloneCard = cardArticle.cloneNode(true);
  const photoContainer = cloneCard.querySelector('.popup__photos');
  const photo = photoContainer.querySelector('.popup__photo');
  const featsList = cloneCard.querySelector('.popup__features');

  const titleCard = cloneCard.querySelector('.popup__title');
  const addressCard = cloneCard.querySelector('.popup__text--address');
  const descriptionCard = cloneCard.querySelector('.popup__description');

  const fields = [
    titleCard,
    addressCard,
    descriptionCard,
    price,
    type,
    rooms,
    guests,
    checkin,
    checkout,
  ];

  cloneCard.querySelector('.popup__text--price').textContent = `${price}₽/ночь`;
  cloneCard.querySelector('.popup__type').textContent = typesPlace[type];
  cloneCard.querySelector('.popup__text--capacity').textContent = `${rooms} комнаты для ${guests} гостей.`;
  cloneCard.querySelector('.popup__text--time').textContent = `Заезд после ${checkin}, выезд до ${checkout}.`;
  cloneCard.querySelector('.popup__avatar').src = avatar;

  titleCard.textContent = title;
  addressCard.textContent = address;
  descriptionCard.textContent = description;

  checkContent(fields);

  if (offer.features && features.length > 0) {
    featsList.innerHTML = '';
    fillFeat(features, featsList);
  } else {
    featsList.remove();
  }

  if (offer.photos && photos.length > 0) {
    photoContainer.innerHTML = '';
    fillPhotos(photos, photo, photoContainer);
  } else {
    photoContainer.remove();
  }

  return cloneCard;
};

export { renderCard };
