import { GenresMapper } from 'utils/Genres/GenresMapper';
import { useFetchMovies } from 'hooks/useFetchMovies';
import { Link } from 'react-router-dom';
import {
  MovieDescriptionContainer,
  MoviePoster,
  MovieInfo,
  MovieInfoItem,
  MovieInfoTitle,
  MovieInfoText,
  MovieTitle,
} from './MovieDescription.styled';

export const MovieDescription = () => {
  const movie = useFetchMovies();
  return (
    movie && (
      <>
        <MovieDescriptionContainer>
          <MoviePoster
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : `https://vcunited.club/wp-content/uploads/2020/01/No-image-available-2.jpg`
            }
            alt={movie.title}
          />

          <MovieInfo>
            <MovieTitle>{movie.title}</MovieTitle>
            <ul>
              <MovieInfoItem>
                <MovieInfoTitle>User Score</MovieInfoTitle>
                <MovieInfoText>
                  {Math.ceil(movie.vote_average * 10)}%
                </MovieInfoText>
              </MovieInfoItem>
              <MovieInfoItem>
                <MovieInfoTitle>Overview</MovieInfoTitle>
                <MovieInfoText>{movie.overview}</MovieInfoText>
              </MovieInfoItem>
              <MovieInfoItem>
                <MovieInfoTitle>Genres</MovieInfoTitle>

                <GenresMapper genres={movie.genres} />
              </MovieInfoItem>
            </ul>
          </MovieInfo>
        </MovieDescriptionContainer>
        <div>
          <h3>Additional information</h3>

          <Link to="cast">Cast</Link>
          <Link to="reviews">Reviews</Link>
        </div>
      </>
    )
  );
};
