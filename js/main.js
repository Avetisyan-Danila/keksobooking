import './form-validation.js';
import {createSimilarAdsPopup} from './popup.js';
import {createAdsMapMarkers} from './map.js';
import {showAlert} from './util.js';
import {getData} from './api.js';
import {adFormSubmit} from './form.js';

getData(
  (ads) => {
    createSimilarAdsPopup(ads);
    createAdsMapMarkers(ads);
  },
  () => showAlert('Не удалось отправить форму. Попробуйте ещё раз'),
);

adFormSubmit();
