import { MovieReviews } from 'components/MovieReviews/MovieReviews';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'services/moviesApi';
import { reviewsMapper } from 'utils/reviewsMapper';
import { Loader } from 'components/Loader/Loader';
import { RieviewsContainer } from './Rieviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function searchReviews() {
      setIsLoading(true);
      const reviewsArray = await fetchMovieReviews(movieId);
      const filtredReviews = reviewsMapper(reviewsArray);

      setReviews(filtredReviews);
      setIsLoading(false);
    }
    searchReviews();
  }, [movieId]);

  return (
    <RieviewsContainer>
      {isLoading && <Loader />}
      {reviews.length === 0 && !isLoading ? (
        <p>Sorry, there are no reviews yet</p>
      ) : (
        <MovieReviews reviews={reviews} />
      )}
    </RieviewsContainer>
  );
};

export default Reviews;
