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
  for (let i = 0; i < array.length; i++) {
    const newFeat = document.createElement('li');

    newFeat.classList.add('popup__feature');
    newFeat.classList.add(`popup__feature--${array[i]}`);
    block.append(newFeat);
  }
};

const fillPhotos = (photos, photo, block) => {
  for (let i = 0; i < photos.length; i++) {
    const photoNew = photo.cloneNode(true);

    photoNew.src = photos[i];
    block.append(photoNew);
  }
};

const checkContentText = (arrTextField) => {
  for (let i = 0; i < arrTextField.length; i++) {
    if (arrTextField[i].textContent === '') {
      arrTextField[i].remove();
    }
  }
};

const checkContentArr = (arrTextField) => {
  if (arrTextField.length < 0) {
    throw new Error('Пустое поле!');
  }
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

  const {avatar} = author;


  const cloneCard = cardArticle.cloneNode(true);
  const photoContainer = cloneCard.querySelector('.popup__photos');
  const photo = photoContainer.querySelector('.popup__photo');
  const featsList = cloneCard.querySelector('.popup__features');

  const titleCard = cloneCard.querySelector('.popup__title');
  const addressCard = cloneCard.querySelector('.popup__text--address');
  const descriptionCard = cloneCard.querySelector('.popup__description');

  const textField = [
    titleCard,
    addressCard,
    descriptionCard,
  ];

  const arrField = [
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

  checkContentText(textField);
  checkContentArr(arrField);

  featsList.innerHTML = '';

  if (features.length > 0) {
    fillFeat(features, featsList);
  }

  photoContainer.innerHTML = '';

  if (photos.length > 0) {
    fillPhotos(photos, photo, photoContainer);
  }

  return cloneCard;
};

export {renderCard};
