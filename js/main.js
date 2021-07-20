import './form-validation.js';
import {createAdsMapMarkers, setMapHousingTypeFilterChange, setMapHousingPriceFilterChange, setMapHousingRoomsFilterChange, setMapHousingGuestsFilterChange, setMapHousingFeaturesFilterChange} from './map.js';
import {showAlert, debounce} from './util.js';
import {getData} from './api.js';
import {adFormSubmit} from './form.js';

const ADS_COUNT = 10;
const RERENDER_DELAY = 500;

getData(
  (ads) => {
    createAdsMapMarkers(ads.slice(0, ADS_COUNT));
    setMapHousingTypeFilterChange(debounce(() => createAdsMapMarkers(ads), RERENDER_DELAY));
    setMapHousingPriceFilterChange(debounce(() => createAdsMapMarkers(ads), RERENDER_DELAY));
    setMapHousingRoomsFilterChange(debounce(() => createAdsMapMarkers(ads), RERENDER_DELAY));
    setMapHousingGuestsFilterChange(debounce(() => createAdsMapMarkers(ads), RERENDER_DELAY));
    setMapHousingFeaturesFilterChange(debounce(() => createAdsMapMarkers(ads), RERENDER_DELAY));
  },
  () => showAlert('При загрузке данных с сервера произошла. Попробуйте ещё раз'),
);

adFormSubmit();
