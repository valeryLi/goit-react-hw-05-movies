import { MovieDescription } from 'components/MovieDescription/MovieDescription';
import { Outlet, useParams } from 'react-router-dom';
import { GoBackBtn } from 'components/GoBackBtn/GoBackBtn';
import { useState, useEffect } from 'react';
import { fetchMovieById } from 'services/moviesApi';
import { Loader } from 'components/Loader/Loader';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getMovieDetails() {
      setIsLoading(true);
      const details = await fetchMovieById(movieId);
      setMovieDetails(details);
      setIsLoading(false);
    }
    getMovieDetails();
  }, [movieId]);

  return (
    movieDetails && (
      <>
        <GoBackBtn />
        {isLoading && <Loader />}
        <MovieDescription movie={movieDetails} />

        <Outlet />
      </>
    )
  );
};

export default MovieDetails;
