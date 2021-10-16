/* eslint-disable no-undef */
import {getAds, OFFERS_AMOUNT} from './create-offers.js';
import {renderCard, offer, author} from './card-popup.js';

getAds(OFFERS_AMOUNT);
renderCard(offer, author);
