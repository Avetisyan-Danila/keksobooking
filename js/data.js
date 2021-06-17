import {getRandomFloat, getRandomArrayElement, getAuthorAvatar} from './util';

const HOUSE_TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const CHECKIN_HOURS = [
  '12:00',
  '13:00',
  '14:00',
];

const CHECKOUT_HOURS = [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const LAT_MIN = 35.65000;
const LAT_MAX = 35.7000;
const LNG_MIN = 139.70000;
const LNG_MAX = 139.80000;

const PRICE_MIN = 10000;
const PRICE_MAX = 100000;

const ROOMS_MIN = 1;
const ROOMS_MAX = 5;

const GUESTS_MIN = 1;
const GUESTS_MAX = 3;

const ADS_COUNT = 10;

const createAdAuthor = () => ({
  avatar: `img/avatars/user${getAuthorAvatar()}.png`,
});

const createAdHouseLocation = () => ({
  lat: getRandomFloat(LAT_MIN, LAT_MAX, 5),
  lng: getRandomFloat(LNG_MIN, LNG_MAX, 5),
});

const createAdOffer = () => ({
  title: 'Квартира в новостройке',
  address: `${createAdHouseLocation().lat}, ${createAdHouseLocation().lng}`,
  price: Math.floor(getRandomFloat(PRICE_MIN, PRICE_MAX)),
  type: getRandomArrayElement(HOUSE_TYPES),
  rooms: Math.floor(getRandomFloat(ROOMS_MIN, ROOMS_MAX)),
  guests: Math.floor(getRandomFloat(GUESTS_MIN, GUESTS_MAX)),
  checkin: getRandomArrayElement(CHECKIN_HOURS),
  checkout: getRandomArrayElement(CHECKOUT_HOURS),
  features: Array.from(new Set(new Array(Math.floor(getRandomFloat(1, FEATURES.length + 1))).fill(null).map(() => getRandomArrayElement(FEATURES)))),
  description: 'Просторная, уютная',
  photos: Array.from(new Set(new Array(Math.floor(getRandomFloat(1, PHOTOS.length + 1))).fill(null).map(() => getRandomArrayElement(PHOTOS)))),
});

export {ADS_COUNT, createAdAuthor, createAdHouseLocation, createAdOffer};
