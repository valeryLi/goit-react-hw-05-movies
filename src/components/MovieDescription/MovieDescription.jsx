import { GenresMapper } from 'utils/Genres/GenresMapper';
import { useFetchMovies } from 'hooks/useFetchMovies';

import {
  MovieDescriptionContainer,
  MoviePoster,
  MovieInfo,
  MovieInfoItem,
  MovieInfoTitle,
  MovieInfoText,
  MovieTitle,
  AdditionalInfoContainer,
  AdditionalInfoTitle,
  AdditionalInfoList,
  AdditionalInfoLink,
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
        <AdditionalInfoContainer>
          <AdditionalInfoTitle>Additional information</AdditionalInfoTitle>
          <AdditionalInfoList>
            <li>
              <AdditionalInfoLink to="cast">Cast</AdditionalInfoLink>{' '}
            </li>
            <li>
              <AdditionalInfoLink to="reviews">Reviews</AdditionalInfoLink>
            </li>
          </AdditionalInfoList>
        </AdditionalInfoContainer>
      </>
    )
  );
};
