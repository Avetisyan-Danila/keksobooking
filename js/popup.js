const similarAdsTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');

const similarAdsElements = [];

const createSimilarAdsPopup = (similarAds) => {
  similarAds.forEach(({author, offer}) => {
    const adElement = similarAdsTemplate.cloneNode(true);

    !offer.title.length ?
      adElement.querySelector('.popup__title').classList.add('hidden')
      :
      adElement.querySelector('.popup__title').textContent = offer.title;

    !offer.address.length ?
      adElement.querySelector('.popup__text--address').classList.add('hidden')
      :
      adElement.querySelector('.popup__text--address').textContent = offer.address;

    !offer.price.length ?
      adElement.querySelector('.popup__text--price').classList.add('hidden')
      :
      adElement.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;

    switch (offer.type) {
      case 'palace':
        adElement.querySelector('.popup__type').textContent = 'Дворец';
        break;
      case 'flat':
        adElement.querySelector('.popup__type').textContent = 'Квартира';
        break;
      case 'house':
        adElement.querySelector('.popup__type').textContent = 'Дом';
        break;
      case 'bungalow':
        adElement.querySelector('.popup__type').textContent = 'Бунгало';
        break;
      case 'hotel':
        adElement.querySelector('.popup__type').textContent = 'Отель';
        break;
    }

    adElement.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;

    adElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;

    try {
      adElement.querySelector('.popup__features').textContent = offer.features;
    } catch (err) {
      adElement.querySelector('.popup__features').classList.add('hidden');
    }

    try {
      adElement.querySelector('.popup__description').textContent = offer.description;
    } catch (err) {
      adElement.querySelector('.popup__description').classList.add('hidden');
    }

    adElement.querySelector('.popup__photos').innerHTML = '';
    try {
      offer.photos.forEach((photo) => {
        adElement.querySelector('.popup__photos').insertAdjacentHTML('beforeend', `<img src="${photo}" class="popup__photo" width="45" height="40" alt="Фотография жилья">`);
      });
    } catch (err) {
      adElement.querySelector('.popup__photos').classList.add('hidden');
    }

    adElement.querySelector('.popup__avatar').src = author.avatar;

    similarAdsElements.push(adElement);
  });
};

export {createSimilarAdsPopup, similarAdsElements};
