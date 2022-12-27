import { Link } from 'react-router-dom';
import { MovieCard, Image } from './MovieItem.styled';

export const MoviesItem = ({ id, title, poster }) => {
  return (
    <MovieCard>
      <Link to={`/movies/${id}`}>
        <Image
          src={
            poster
              ? `https://image.tmdb.org/t/p/w500${poster}`
              : `https://vcunited.club/wp-content/uploads/2020/01/No-image-available-2.jpg`
          }
          alt={title}
        />
        <p>{title}</p>
      </Link>
    </MovieCard>
  );
};
