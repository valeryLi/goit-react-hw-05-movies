import PropTypes from 'prop-types';
import { MoviesItem } from 'components/MoviesItem/MoviesItem';
import { ListItem, MoviesGallery } from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
  return (
    movies && (
      <>
        <MoviesGallery>
          {movies.map(({ title, id, poster_path, vote_average }) => (
            <ListItem key={id}>
              <MoviesItem
                title={title}
                id={id}
                poster={poster_path}
                rating={vote_average}
              />
            </ListItem>
          ))}
        </MoviesGallery>
      </>
    )
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      rating: PropTypes.number,
      poster: PropTypes.string,
      title: PropTypes.string,
      id: PropTypes.number,
    })
  ),
};
