const adForm = document.querySelector('.ad-form');
const fieldsetsAdForm = adForm.querySelectorAll('fieldset');
const mapFilter = document.querySelector('.map__filters');
const fieldsetsMapFilter = mapFilter.querySelectorAll('fieldset');
const selectsMapFilter = mapFilter.querySelectorAll('select');

const changeStateDisabled = () => {
  adForm.classList.add('ad-form--disabled');
  fieldsetsAdForm.forEach((fieldset) => {
    fieldset.disabled = true;
  });

  mapFilter.classList.add('map__filters--disabled');
  fieldsetsMapFilter.forEach((fieldset) => {
    fieldset.disabled = true;
  });
  selectsMapFilter.forEach((select) => {
    select.disabled = true;
  });
};

const changeStateActive = () => {
  adForm.classList.remove('ad-form--disabled');
  fieldsetsAdForm.forEach((fieldset) => {
    fieldset.disabled = false;
  });

  mapFilter.classList.remove('map__filters--disabled');
  fieldsetsMapFilter.forEach((fieldset) => {
    fieldset.disabled = false;
  });
  selectsMapFilter.forEach((select) => {
    select.disabled = false;
  });
};

export {changeStateDisabled, changeStateActive};
