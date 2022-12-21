import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieById } from 'services/moviesApi';

export const useFetchMovies = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  console.log(movieId);

  useEffect(() => {
    fetchMovieById(movieId).then(setMovie);
  }, [movieId]);

  return movie;
};
