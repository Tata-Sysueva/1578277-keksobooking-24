/* eslint-disable no-undef */
import {getAds} from './create-offers.js';
import {renderCard} from './card-popup.js';
import {setFormListeners} from './form-validation.js';
import {changeStateDisabled, changeStateActive} from './form-state.js';

const map = document.querySelector('.map__canvas');

const OFFERS_AMOUNT = 10;

const data = getAds(OFFERS_AMOUNT);
const card = renderCard(data[0]);

setFormListeners();
changeStateDisabled();
changeStateActive();

map.appendChild(card);
