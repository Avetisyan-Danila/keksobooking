const createSimilarAdsPopup = (ad) => {
  const similarAdsTemplate = document.querySelector('#card')
    .content
    .querySelector('.popup');

  const adElement = similarAdsTemplate.cloneNode(true);

  !ad.offer.title.length ?
    adElement.querySelector('.popup__title').classList.add('hidden')
    :
    adElement.querySelector('.popup__title').textContent = ad.offer.title;

  !ad.offer.address.length ?
    adElement.querySelector('.popup__text--address').classList.add('hidden')
    :
    adElement.querySelector('.popup__text--address').textContent = ad.offer.address;

  adElement.querySelector('.popup__text--price').textContent = `${ad.offer.price} ₽/ночь`;

  switch (ad.offer.type) {
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

  adElement.querySelector('.popup__text--capacity').textContent = `${ad.offer.rooms} комнаты для ${ad.offer.guests} гостей`;

  adElement.querySelector('.popup__text--time').textContent = `Заезд после ${ad.offer.checkin}, выезд до ${ad.offer.checkout}`;

  try {
    adElement.querySelector('.popup__features').textContent = ad.offer.features;
  } catch (err) {
    adElement.querySelector('.popup__features').classList.add('hidden');
  }

  try {
    adElement.querySelector('.popup__description').textContent = ad.offer.description;
  } catch (err) {
    adElement.querySelector('.popup__description').classList.add('hidden');
  }

  adElement.querySelector('.popup__photos').innerHTML = '';
  try {
    ad.offer.photos.forEach((photo) => {
      adElement.querySelector('.popup__photos').insertAdjacentHTML('beforeend', `<img src="${photo}" class="popup__photo" width="45" height="40" alt="Фотография жилья">`);
    });
  } catch (err) {
    adElement.querySelector('.popup__photos').classList.add('hidden');
  }

  adElement.querySelector('.popup__avatar').src = ad.author.avatar;

  return adElement;
};

export {createSimilarAdsPopup};
