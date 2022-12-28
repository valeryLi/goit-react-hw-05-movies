import { Searchbar } from 'components/Searchbar/Searchbar';
import { fetchMovieByQuery } from 'services/moviesApi';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { moviesMapper } from 'utils/moviesMapper';
import { Image } from './MoviesPage.styled';

export const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParams = searchParams.get('query');

  useEffect(() => {
    if (queryParams) {
      async function searchMovies() {
        const moviesArray = await fetchMovieByQuery(queryParams);
        const filtredMovies = moviesMapper(moviesArray);
        if (moviesArray.length === 0) {
          alert('No matches');
        }
        setMovies(filtredMovies);
      }
      searchMovies();
    }
  }, [queryParams]);

  const handleFormSubmit = query => {
    setSearchParams({ query });
    setMovies([]);
  };

  return (
    <>
      <Searchbar onSubmit={handleFormSubmit} />
      {movies.length > 0 ? (
        <MoviesList movies={movies} />
      ) : (
        <Image
          src="https://image.freepik.com/vector-gratis/diseno-de-icono-de-cine_24911-26856.jpg"
          alt="popcorn"
        />
      )}
    </>
  );
};
