/* eslint-disable eqeqeq */
/* eslint-disable prefer-const */
import {getAds} from './create-offers.js';

const map = document.querySelector('.map__canvas');
const cardTemplate = document.querySelector('#card').content;
const cardArticle = cardTemplate.querySelector('.popup');

const typePlace = {
  'flat': 'Квартира',
  'bungalow': 'Бунгало',
  'house': 'Дом',
  'palace': 'Дворец',
  'hotel': 'Отель',
};

const offer = getAds(1)[0].offer;
const author = getAds(1)[0].author;

const renderCard = (dataOffer, dataAuthor) => {
  const newCardArticle = cardArticle.cloneNode(true);
  const photoCollection = newCardArticle.querySelector('.popup__photos');
  const photo = photoCollection.querySelector('.popup__photo');

  const featsList = newCardArticle.querySelector('.popup__features');
  const featItems =featsList.querySelectorAll('.popup__feature');

  const place = dataOffer.type;
  const arrPhotos = Array.from(dataOffer.photos);
  const arrFeats = Array.from(dataOffer.features);
  const modArrFeats = arrFeats.map((feat) => `popup__feature--${feat}`);

  newCardArticle.querySelector('.popup__title').textContent = dataOffer.title;
  newCardArticle.querySelector('.popup__text--address').textContent = dataOffer.address;
  newCardArticle.querySelector('.popup__text--price').textContent = `${dataOffer.price}₽/ночь`;
  newCardArticle.querySelector('.popup__type').textContent = typePlace[place];
  newCardArticle.querySelector('.popup__text--capacity').textContent = `${dataOffer.rooms} комнаты для ${dataOffer.guests} гостей.`;
  newCardArticle.querySelector('.popup__text--time').textContent = `Заезд после ${dataOffer.checkin}, выезд до ${dataOffer.checkout}.`;
  newCardArticle.querySelector('.popup__description').textContent = dataOffer.description;
  newCardArticle.querySelector('.popup__avatar').src = dataAuthor.avatar;

  featItems.forEach((featItem) => {
    const modifier = featItem.classList[1];

    if (!modArrFeats.includes(modifier)) {
      featItem.remove();
    }
  });

  if (arrPhotos.length == 0) {
    photo.style.display = 'none';
  } else {
    photo.src = arrPhotos[0];

    for (let i = 1; i < arrPhotos.length; i++) {
      const fragment = document.createDocumentFragment();
      const photoNew = photo.cloneNode(true);

      photoNew.src = arrPhotos[i];
      fragment.append(photoNew);
      photoCollection.append(fragment);
    }
  }

  map.append(newCardArticle);
};

export {renderCard, offer, author};
