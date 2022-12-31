import { Searchbar } from 'components/Searchbar/Searchbar';
import { fetchMovieByQuery } from 'services/moviesApi';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { moviesMapper } from 'utils/moviesMapper';
import { Image } from './MoviesPage.styled';
import { Loader } from 'components/Loader/Loader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParams = searchParams.get('query');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function searchMovies() {
      setIsLoading(true);
      const moviesArray = await fetchMovieByQuery(queryParams);
      const filtredMovies = moviesMapper(moviesArray);

      if (moviesArray.length === 0) {
        setIsLoading(false);
        return showToastMessageError();
      }

      setMovies(filtredMovies);
      setIsLoading(false);
    }

    if (queryParams) {
      searchMovies();
    }
  }, [queryParams]);

  const handleFormSubmit = query => {
    setSearchParams({ query });
    setMovies([]);
  };

  const showToastMessageError = () => {
    toast.error('Sorry, no matches there, please try again.', {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
  };

  return (
    <>
      <Searchbar onSubmit={handleFormSubmit} />
      {isLoading && <Loader />}
      {movies.length > 0 ? (
        <MoviesList movies={movies} />
      ) : (
        <Image
          src="https://image.freepik.com/vector-gratis/diseno-de-icono-de-cine_24911-26856.jpg"
          alt="popcorn"
        />
      )}
      <ToastContainer />
    </>
  );
};

export default MoviesPage;
