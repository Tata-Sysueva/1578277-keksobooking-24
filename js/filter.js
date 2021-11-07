import { clearMarkers, renderMarkers } from './map.js';

const OFFER_COUNT = 10;

const formFilter = document.querySelector('.map__filters');
const formFilterType = formFilter.querySelector('#housing-type');

// const onFilterType = () => {
//   const filterType = formFilterType.value;
//   console.log(filterType);
// };

const checkOffer = ({ offer }) => {
  const type = offer.type;
  if (type === formFilterType.value) {
    return true;
  }
};

const filterOffers = (data) => {
  const filterData =
         data
           .slice()
           .filter(checkOffer)
           .slice(0, OFFER_COUNT);

  return filterData;
};

const onFilterMapChange = (data) => {
  filterOffers(data);
  clearMarkers();
  renderMarkers(filterOffers(data));
};

const getFilterOffers = (dataOffers) => {
  formFilter.addEventListener('change', () => {
    onFilterMapChange(dataOffers);
  },
  );
};

export { getFilterOffers };
