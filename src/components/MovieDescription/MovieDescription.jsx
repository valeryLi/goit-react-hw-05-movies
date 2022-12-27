import { GenresMapper } from 'utils/GenresMapper';
import { useFetchMovies } from 'hooks/useFetchMovies';
import { Link } from 'react-router-dom';

export const MovieDescription = () => {
  const movie = useFetchMovies();
  return (
    movie && (
      <div>
        <h2>{movie.title}</h2>
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : `https://vcunited.club/wp-content/uploads/2020/01/No-image-available-2.jpg`
          }
          alt={movie.title}
        />
        <div>
          <ul>
            <li>
              <h3>User Score</h3>
              <p>{Math.ceil(movie.vote_average * 10)}%</p>
            </li>
            <li>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
            </li>
            <li>
              <h3>Genres</h3>
              <GenresMapper genres={movie.genres} />
            </li>
          </ul>
          <div>
            <h3>Additional information</h3>
            <Link to="cast">Cast</Link>
            <Link to="reviews">Reviews</Link>
          </div>
        </div>
      </div>
    )
  );
};
