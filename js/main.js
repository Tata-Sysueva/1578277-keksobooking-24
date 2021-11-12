import { setFormListeners } from './form-offer.js';
import { deactivatePage } from './form-state.js';
import { initMap } from './map.js';
import { uploadPhotos } from './upload-photos.js';

setFormListeners();
deactivatePage();
initMap();
uploadPhotos();
