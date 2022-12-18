import { fetchMovies } from 'services/moviesApi';
import { useState } from 'react';
import { useEffect } from 'react';

export const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies().then(setMovies);
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <ul>
        <li></li>
      </ul>
    </>
  );
};
