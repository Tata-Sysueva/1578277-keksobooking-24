/* eslint-disable no-undef */
import {getAds} from './create-offers.js';
import {renderCard} from './card-popup.js';
import {setFormListeners} from './form.js';

const map = document.querySelector('.map__canvas');

const OFFERS_AMOUNT = 10;

const data = getAds(OFFERS_AMOUNT);
const card = renderCard(data[0]);

setFormListeners();

map.appendChild(card);
