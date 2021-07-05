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
