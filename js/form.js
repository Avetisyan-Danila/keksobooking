import {isEscEvent} from './util.js';
import {sendData} from './api.js';

const adForm = document.querySelector('.ad-form');
const adFormElements = adForm.querySelectorAll('.ad-form__element');
const formAddressField = document.querySelector('#address');

const formMapFilter = document.querySelector('.map__filters');
const formMapFilterElements = formMapFilter.querySelectorAll('.map__filter');

const successTemplate = document.querySelector('#success')
  .content
  .querySelector('.success');

const errorTemplate = document.querySelector('#error')
  .content
  .querySelector('.error');

const deactivateForm = () => {
  adForm.classList.add('ad-form--disabled');
  adFormElements.forEach((element) => {
    element.setAttribute('disabled', 'disabled');
  });

  formMapFilter.classList.add('map__filters--disabled');
  formMapFilterElements.forEach((element) => {
    element.setAttribute('disabled', 'disabled');
  });
};

const activateForm = () => {
  adForm.classList.remove('ad-form--disabled');
  adFormElements.forEach((element) => {
    element.removeAttribute('disabled');
  });

  formMapFilter.classList.remove('map__filters--disabled');
  formMapFilterElements.forEach((element) => {
    element.removeAttribute('disabled');
  });
};

const adFormSubmit = () => {
  adForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const successMessage = successTemplate.cloneNode(true);

    const closeSuccessMessage = () => {
      successMessage.classList.add('hidden');
      document.removeEventListener('keydown', document);
    };

    const errorMessage = errorTemplate.cloneNode(true);
    const errorMessageResetButton = errorMessage.querySelector('.error__button');

    const closeErrorMessage = () => {
      errorMessage.classList.add('hidden');
      document.removeEventListener('keydown', document);
    };

    sendData(
      () => {
        adForm.reset();
        formAddressField.value = '35.68950, 139.69250';

        document.body.append(successMessage),
        document.addEventListener('keydown', (e) => {
          if (isEscEvent(e)) {
            closeSuccessMessage();
          }
        });
        document.addEventListener('click', () => {
          closeSuccessMessage();
        });
      },
      () => {
        document.body.append(errorMessage),
        document.addEventListener('keydown', (e) => {
          if (isEscEvent(e)) {
            closeErrorMessage();
          }
        });
        document.addEventListener('click', () => {
          closeErrorMessage();
        });
        errorMessageResetButton.addEventListener('click', () => {
          closeErrorMessage();
        });
      },
      new FormData(evt.target),
    );
  });
};
export {deactivateForm, activateForm, adFormSubmit};
