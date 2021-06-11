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

const HOUSE_TYPE = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const CHECKIN_TIME = [
  '12:00',
  '13:00',
  '14:00',
];

const CHECKOUT_TIME = [
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

const adAuthor = () => ({
  avatar: `img/avatars/user${getAuthorAvatar()}.png`,
});

const adHouseLocation = () => ({
  lat: getRandomFloat(35.65000, 35.7000, 5),
  lng: getRandomFloat(139.70000, 139.80000, 5),
});

const adOffer = () => ({
  title: 'Квартира в новостройке',
  address: `${adHouseLocation().lat}, ${adHouseLocation().lng}`,
  price: Math.floor(getRandomFloat(10000, 100000)),
  type: getRandomArrayElement(HOUSE_TYPE),
  rooms: Math.floor(getRandomFloat(1, 5)),
  guests: Math.floor(getRandomFloat(1, 3)),
  checkin: getRandomArrayElement(CHECKIN_TIME),
  checkout: getRandomArrayElement(CHECKOUT_TIME),
  features: Array.from(new Set(new Array(Math.floor(getRandomFloat(1, FEATURES.length + 1))).fill(null).map(() => getRandomArrayElement(FEATURES)))),
  description: 'Просторная, уютная',
  photos: Array.from(new Set(new Array(Math.floor(getRandomFloat(1, PHOTOS.length + 1))).fill(null).map(() => getRandomArrayElement(PHOTOS)))),
});

const AD_COUNT = 10;

const ads = new Array(AD_COUNT).fill(null).map(() => ({
  author : adAuthor(),
  offer : adOffer(),
  location : adHouseLocation(),
}));
