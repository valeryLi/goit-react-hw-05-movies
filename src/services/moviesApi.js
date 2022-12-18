import axios from 'axios';

const API_KEY = '68d4d93a5383af68a17fffcfb4da1936';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export async function fetchMovies() {
  try {
    const response = await axios('/trending/movie/day', {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data.append_to_response;
  } catch (error) {
    console.error(error);
  }
}
