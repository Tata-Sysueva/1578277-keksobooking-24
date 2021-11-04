import { setFormListeners } from './form-offer.js';
import { deactivatePage } from './form-state.js';
import { initMap, renderMarkers } from './map.js';
import { getData } from './api.js';
import { showAlert } from './util.js';

setFormListeners();
//sendDataForm();
deactivatePage();
initMap();

const loadOffer = getData(renderMarkers, showAlert);
loadOffer();
