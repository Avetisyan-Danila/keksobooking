const adForm = document.querySelector('.ad-form');
const adFormElements = adForm.querySelectorAll('.ad-form__element');

const formMapFilter = document.querySelector('.map__filters');
const formMapFilterElements = formMapFilter.querySelectorAll('.map__filter');

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

export {deactivateForm, activateForm};
