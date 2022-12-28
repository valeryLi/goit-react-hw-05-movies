import { fetchMovies } from 'services/moviesApi';
import { useState, useEffect } from 'react';
import { HomeTitle } from './HomePage.styled';

import { MoviesList } from 'components/MoviesList/MoviesList';

export const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies().then(setMovies);
  }, []);

  return (
    movies && (
      <>
        <HomeTitle>Trending today</HomeTitle>
        <MoviesList movies={movies} />
      </>
    )
  );
};
