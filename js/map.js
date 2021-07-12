import {deactivateForm, activateForm} from './form.js';
import {similarAds} from './data.js';
import {createSimilarAdsPopup, similarAdsElements} from './popup.js';

deactivateForm();
createSimilarAdsPopup();

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
  iconUrl: 'img/pin.svg',
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

formResetButton.addEventListener('click', () => {
  mainPinMarker.setLatLng({
    lat: 35.6895,
    lng: 139.6925,
  });

  map.setView({
    lat: 35.6895,
    lng: 139.6925,
  }, 12);
});

const points = [];

similarAds.forEach(({location}) => {
  const point = {
    lat: location.lat,
    lng: location.lng,
  };

  points.push(point);
});

for (let i = 0; i < points.length; i++) {
  const icon = L.icon({
    iconUrl: 'img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const marker = L.marker(
    {
      lat: points[i].lat,
      lng: points[i].lng,
    },
    {
      icon,
    },
  );

  marker
    .addTo(map)
    .bindPopup(similarAdsElements[i]);
}
