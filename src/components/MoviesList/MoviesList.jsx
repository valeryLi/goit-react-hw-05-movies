import { MoviesItem } from 'components/MoviesItem/MoviesItem';
import { List } from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
  return (
    movies && (
      <>
        <ul>
          {movies.map(({ title, id, poster_path, vote_average }) => (
            <List key={id}>
              <MoviesItem
                title={title}
                id={id}
                poster={poster_path}
                rating={vote_average}
              />
            </List>
          ))}
        </ul>
      </>
    )
  );
};
