import { MovieDescription } from 'components/MovieDescription/MovieDescription';
import { useFetchMovies } from 'hooks/useFetchMovies';
import { Outlet } from 'react-router-dom';

export const MovieDetails = () => {
  const movie = useFetchMovies();
  return (
    <>
      {movie && (
        <div>
          {/* <MoviesItem movie={movie} /> */}
          <MovieDescription movie={movie} />

          <Outlet />
        </div>
      )}
    </>
  );
};
