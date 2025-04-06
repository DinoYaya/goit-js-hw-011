import axios from 'axios';

const API_KEY = '49618570-65d81de6e7a9899840c4a7811'; 
const BASE_URL = 'https://pixabay.com/api/';

/**
 * Функція для отримання зображень за пошуковим запитом
 * @param {string} query - Пошуковий запит
 * @returns {Promise} Обіцянка з даними відповіді
 */
export async function getImagesByQuery(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  const response = await axios.get(BASE_URL, { params });
  return response.data;
}