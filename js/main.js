/* eslint-disable no-undef */
import {getAds} from './create-offers.js';
import {renderCard} from './card-popup.js';

const map = document.querySelector('.map__canvas');

const OFFERS_AMOUNT = 10;

const data = getAds(OFFERS_AMOUNT);
const card = renderCard(data[0]);

map.appendChild(card);
