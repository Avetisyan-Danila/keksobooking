import {deactivateForm, activateForm} from './form.js';
import {createSimilarAdsPopup} from './popup.js';

deactivateForm();

const adForm = document.querySelector('.ad-form');
const formResetButton = document.querySelector('.ad-form__reset');
const formAddressField = document.querySelector('#address');

const map = L.map('map-canvas')
  .on('load', () => {
    activateForm();
  })
  .setView({
    lat: 35.6895,
    lng: 139.6925,
  }, 12);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: 'img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainPinMarker = L.marker(
  {
    lat: 35.6895,
    lng: 139.6925,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(map);

formAddressField.value = `${mainPinMarker.getLatLng().lat.toFixed(5)}, ${mainPinMarker.getLatLng().lng.toFixed(5)}`;

mainPinMarker.on('moveend', (evt) => {
  formAddressField.value = `${evt.target.getLatLng().lat.toFixed(5)}, ${evt.target.getLatLng().lng.toFixed(5)}`;
});

formResetButton.addEventListener('click', (evt) => {
  evt.preventDefault();

  adForm.reset();
  formAddressField.value = '35.68950, 139.69250';

  mainPinMarker.setLatLng({
    lat: 35.6895,
    lng: 139.6925,
  });

  map.setView({
    lat: 35.6895,
    lng: 139.6925,
  }, 12);
});

const ADS_COUNT = 10;

const mapHousingTypeSelect = document.querySelector('#housing-type');
const mapHousingPriceSelect = document.querySelector('#housing-price');
const mapHousingRoomsSelect = document.querySelector('#housing-rooms');
const mapHousingGuestsSelect = document.querySelector('#housing-guests');
const mapHousingFeaturesSelect = document.querySelectorAll('[name="features"]');
let mapHousingFeaturesSelected = [];

const setMapHousingTypeFilterChange = (cb) => {
  mapHousingTypeSelect.addEventListener('change', () => {
    cb();
  });
};

const setMapHousingPriceFilterChange = (cb) => {
  mapHousingPriceSelect.addEventListener('change', () => {
    cb();
  });
};

const setMapHousingRoomsFilterChange = (cb) => {
  mapHousingRoomsSelect.addEventListener('change', () => {
    cb();
  });
};

const setMapHousingGuestsFilterChange = (cb) => {
  mapHousingGuestsSelect.addEventListener('change', () => {
    cb();
  });
};

const setMapHousingFeaturesFilterChange = (cb) => {
  mapHousingFeaturesSelect.forEach((feature) => {
    feature.addEventListener('change', () => {
      cb();
      const arr = [];
      const index = arr.indexOf(feature.value);

      if (feature.checked) {
        arr.push(feature.value);
      } else {
        arr.splice(index, 1);
      }

      mapHousingFeaturesSelected = Array.from(new Set(arr));
    });
  });
};


const getAdsRank = (ad) => {
  let rank = 0;

  if (ad.offer.type === mapHousingTypeSelect.value) {
    rank += 1;
  }

  if (ad.offer.price <= 10000 && mapHousingPriceSelect.value === 'low') {
    rank += 1;
  }

  if (ad.offer.price >= 50000 && mapHousingPriceSelect.value === 'high') {
    rank += 1;
  }

  if (ad.offer.price >= 10000 && ad.offer.price <= 50000 && mapHousingPriceSelect.value === 'middle') {
    rank += 1;
  }

  if (ad.offer.rooms === Number(mapHousingRoomsSelect.value)) {
    rank += 1;
  }

  if (ad.offer.guests === Number(mapHousingGuestsSelect.value)) {
    rank += 1;
  }

  try {
    for (let i = 0; i < ad.offer.features.length; i++) {
      if (ad.offer.features[i] === mapHousingFeaturesSelected[i]) {
        rank +=1;
      }
    }
  } catch (error) {
    rank += 0;
  }

  return rank;
};

const compareAds = (adFirst, adSecond) => {
  const rankA = getAdsRank(adFirst);
  const rankB = getAdsRank(adSecond);

  return rankB - rankA;
};

const markerGroup = L.layerGroup().addTo(map);

const createAdsMapMarkers = (similarAds) => {
  markerGroup.clearLayers();

  similarAds
    .slice()
    .sort(compareAds)
    .slice(0, ADS_COUNT)
    .forEach((point) => {
      const icon = L.icon({
        iconUrl: 'img/pin.svg',
        iconSize: [40, 40],
        iconAnchor: [20, 40],
      });

      const marker = L.marker(
        {
          lat: point.location.lat,
          lng: point.location.lng,
        },
        {
          icon,
        },
      );

      marker
        .addTo(markerGroup)
        .bindPopup(createSimilarAdsPopup(point));
    });
};

export {createAdsMapMarkers, setMapHousingTypeFilterChange, setMapHousingPriceFilterChange, setMapHousingRoomsFilterChange, setMapHousingGuestsFilterChange, setMapHousingFeaturesFilterChange};
