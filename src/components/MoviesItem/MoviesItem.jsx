import { Link } from 'react-router-dom';
import { MovieCard, Image, MovieCardTitle, Rating } from './MovieItem.styled';

export const MoviesItem = ({ id, title, poster, rating }) => {
  return (
    <MovieCard>
      <Link to={`/movies/${id}`}>
        <Rating>{rating.toFixed(2)}</Rating>
        <Image
          src={
            poster
              ? `https://image.tmdb.org/t/p/w500${poster}`
              : `https://vcunited.club/wp-content/uploads/2020/01/No-image-available-2.jpg`
          }
          alt={title}
        />
        <MovieCardTitle>
          {title.length >= 34 ? title.substring(0, 34) + '...' : title}
        </MovieCardTitle>
      </Link>
    </MovieCard>
  );
};
