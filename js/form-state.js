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

const activateAddForm = () => {
  adForm.classList.remove('ad-form--disabled');
  toggleElements(adFormFieldset, false);
};

const activateFilters = () => {
  mapFilter.classList.remove('map__filters--disabled');
  toggleElements(filterFormItems, false);
};

export { deactivatePage, activateAddForm, activateFilters };
