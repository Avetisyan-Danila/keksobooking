import {ADS_COUNT, createAdAuthor, createAdHouseLocation, createAdOffer} from './data';

// eslint-disable-next-line no-unused-vars
const similarAds = new Array(ADS_COUNT).fill(null).map(() => ({
  author : createAdAuthor(),
  offer : createAdOffer(),
  location : createAdHouseLocation(),
}));
