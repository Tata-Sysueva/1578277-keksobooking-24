const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const offerAvatar = document.querySelector('#avatar');
const previewAvatar = document.querySelector('.ad-form-header__preview img');
const offerPhoto = document.querySelector('#images');
const previewOfferPhoto = document.querySelector('.ad-form__photo');

const onAvatarChange = () => {
  const file = offerAvatar.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    previewAvatar.src = URL.createObjectURL(file);
  }
};

const onOfferPhotoChange = () => {
  const previewPhoto = document.createElement('img');
  previewPhoto.style.width = '70px';
  previewPhoto.style.height = '70px';
  previewPhoto.appendChild(previewOfferPhoto);

  const file = offerPhoto.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    previewPhoto.src = URL.createObjectURL(file);
  }
};

const uploadPhotos = () => {
  offerAvatar.addEventListener('change', onAvatarChange);
  offerPhoto.addEventListener('change', onOfferPhotoChange);
};

export { uploadPhotos };
