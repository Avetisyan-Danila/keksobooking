function getRandomFloat(min, max, digits = 1) {
  if (
    min > max ||
    min === max ||
    min < 0 ||
    max <= 0 ||
    digits < 0 ||
    typeof(max) !== 'number' ||
    typeof(min) !== 'number' ||
    typeof(digits) !== 'number') {
    return ('Задан неверный диапазон! Укажите другие числа.');
  }

  return Number((Math.random() * (max - min) + min).toFixed(digits));
}

function getAuthorAvatar () {
  const imgNum = Math.floor(getRandomFloat(1, 11));

  if (imgNum < 10) {
    return `0${imgNum}`;
  }

  return imgNum.toString();
}

const getRandomArrayElement = (elements) => elements[Math.floor(getRandomFloat(0, elements.length - 1))];

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

const createAdAuthor = () => ({
  avatar: `img/avatars/user${getAuthorAvatar()}.png`,
});

const LAT_MIN = 35.65000;
const LAT_MAX = 35.7000;
const LNG_MIN = 139.70000;
const LNG_MAX = 139.80000;

const createAdHouseLocation = () => ({
  lat: getRandomFloat(LAT_MIN, LAT_MAX, 5),
  lng: getRandomFloat(LNG_MIN, LNG_MAX, 5),
});

const PRICE_MIN = 10000;
const PRICE_MAX = 100000;

const ROOMS_MIN = 1;
const ROOMS_MAX = 5;

const GUESTS_MIN = 1;
const GUESTS_MAX = 3;

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

const ADS_COUNT = 10;

// eslint-disable-next-line no-unused-vars
const similarAds = new Array(ADS_COUNT).fill(null).map(() => ({
  author : createAdAuthor(),
  offer : createAdOffer(),
  location : createAdHouseLocation(),
}));
