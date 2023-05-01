import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const KEY = '34648094-ca1417e5f0eb28e7a5cc77423';

export const fetchImagesWithQuery = async searchQuery => {
  const searchParams = new URLSearchParams({
    key: `${KEY}`,
    q: `${searchQuery}`,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: `true`,
    page: '1',
    per_page: '12',
  });

  const { data } = await axios.get(`${BASE_URL}?${searchParams}`);
  // this.incrementPage();

  return data;
};

// export const fetchImagesWithQuery = async searchQuery => {
//   const response = axios.get(`${BASE_URL}`, {
//     params: {
//       key: KEY,
//       q: `${searchQuery}`,
//       image_type: 'photo',
//       orientation: 'horizontal',
//       safesearch: `true`,
//       page: '1',
//       per_page: '12',
//     },
//   });

//   // return response.data.hits;
//   return response.data;
// };
