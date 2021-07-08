const adForm = document.querySelector('.ad-form');
const formRoomQuantity = adForm.querySelector('#room_number');
const formGuestQuantity = adForm.querySelector('#capacity');
const formGuestQuantityOptions = adForm.querySelectorAll('#capacity option');

formRoomQuantity.addEventListener('change', () => {
  formGuestQuantityOptions.forEach((option) => {
    option.setAttribute('disabled', 'disabled');
  });

  formGuestQuantity.value = '1';

  if (formRoomQuantity.value === '1') {
    formGuestQuantityOptions[2].removeAttribute('disabled');
  }

  else if (formRoomQuantity.value === '2') {
    formGuestQuantityOptions[1].removeAttribute('disabled');
    formGuestQuantityOptions[2].removeAttribute('disabled');
  }

  else if (formRoomQuantity.value === '3') {
    formGuestQuantityOptions[0].removeAttribute('disabled');
    formGuestQuantityOptions[1].removeAttribute('disabled');
    formGuestQuantityOptions[2].removeAttribute('disabled');
  }

  else if (formRoomQuantity.value === '100') {
    formGuestQuantity.value = '0';
    formGuestQuantityOptions[3].removeAttribute('disabled');
  }
});

const formHouseType = adForm.querySelector('#type');
const formHousePrice = adForm.querySelector('#price');

formHouseType.addEventListener('change', () => {
  if (formHouseType.value === 'bungalow') {
    formHousePrice.setAttribute('placeholder', '0');
    formHousePrice.setAttribute('min', '0');
  }

  else if (formHouseType.value === 'flat') {
    formHousePrice.setAttribute('placeholder', '1000');
    formHousePrice.setAttribute('min', '1000');
  }

  else if (formHouseType.value === 'hotel') {
    formHousePrice.setAttribute('placeholder', '3000');
    formHousePrice.setAttribute('min', '3000');
  }

  else if (formHouseType.value === 'house') {
    formHousePrice.setAttribute('placeholder', '5000');
    formHousePrice.setAttribute('min', '5000');
  }

  else if (formHouseType.value === 'palace') {
    formHousePrice.setAttribute('placeholder', '10000');
    formHousePrice.setAttribute('min', '10000');
  }
});

const formTimeIn = adForm.querySelector('#timein');
const formTimeOut = adForm.querySelector('#timeout');

formTimeIn.addEventListener('change', () => {
  formTimeOut.value = formTimeIn.value;
});

formTimeOut.addEventListener('change', () => {
  formTimeIn.value = formTimeOut.value;
});
