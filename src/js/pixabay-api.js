import axios from 'axios';

export async function getImagesByQuery(query, page) {
    const baseUrl = 'https://pixabay.com';
    const endPoint = '/api/';
    const url = baseUrl + endPoint;
    const apiKey = '50306313-7dd778a7e5a97bb6309a7d780';

    const params = {
      key: apiKey,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page,
      per_page: 15,
    }

    const res = await axios.get(url, { params });
    return res.data;
}