const adForm = document.querySelector('.ad-form');
const adFormElements = adForm.querySelectorAll('fieldset');
const mapFilter = document.querySelector('.map__filters');
const filterFormElements = mapFilter.querySelectorAll('fieldset select');

const toggleElements = (elements, state) => {
  elements.forEach((fieldset) => {
    fieldset.disabled = state;
  });
};

const deactivatePage = () => {
  adForm.classList.add('ad-form--disabled');
  mapFilter.classList.add('map__filters--disabled');
  toggleElements(adFormElements, true);
  toggleElements(filterFormElements, true);
};

const activatePage = () => {
  adForm.classList.remove('ad-form--disabled');
  mapFilter.classList.remove('map__filters--disabled');
  toggleElements(adFormElements, false);
  toggleElements(filterFormElements, false);
};

export { deactivatePage, activatePage };
