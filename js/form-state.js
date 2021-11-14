const adForm = document.querySelector('.ad-form');
const adFormFieldset = adForm.querySelectorAll('fieldset');
const mapFilter = document.querySelector('.map__filters');
const filterFormItems = mapFilter.querySelectorAll('fieldset select');

const toggleElements = (elements, state) => {
  elements.forEach((fieldset) => {
    fieldset.disabled = state;
  });
};

const deactivatePage = () => {
  adForm.classList.add('ad-form--disabled');
  mapFilter.classList.add('map__filters--disabled');
  toggleElements(adFormFieldset, true);
  toggleElements(filterFormItems, true);
};

const activatePage = () => {
  adForm.classList.remove('ad-form--disabled');
  mapFilter.classList.remove('map__filters--disabled');
  toggleElements(adFormFieldset, false);
  toggleElements(filterFormItems, false);
};

export { deactivatePage, activatePage };
