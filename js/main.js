import { setFormListeners } from './form-offer.js';
import { deactivatePage } from './form-state.js';
import { initMap } from './map.js';
import { uploadPhotos } from './uploadPhotos.js';

setFormListeners();
deactivatePage();
initMap();
uploadPhotos();
