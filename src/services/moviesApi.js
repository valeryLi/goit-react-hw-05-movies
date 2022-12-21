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
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchMovieById(movieId) {
  try {
    const response = await axios(`movie/${movieId}`, {
      params: {
        api_key: API_KEY,
        id: movieId,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchMovieByQuery(query) {
  try {
    const response = await axios('search/movie', {
      params: {
        api_key: API_KEY,
        query,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchMovieActors(movieId) {
  try {
    const response = await axios(`movie/${movieId}/credits`, {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data.cast;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchMovieReviews(movieId) {
  try {
    const response = await axios(`movie/${movieId}/reviews`, {
      params: {
        api_key: API_KEY,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
}
