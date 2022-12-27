import { MovieReviews } from 'components/MovieReviews/MovieReviews';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'services/moviesApi';
import { reviewsMapper } from 'utils/reviewsMapper';
import { Outlet } from 'react-router-dom';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    if (reviews) {
      async function searchReviews() {
        const reviewsArray = await fetchMovieReviews(movieId);
        const filtredReviews = reviewsMapper(reviewsArray);

        setReviews(filtredReviews);
      }
      searchReviews();
    }
  }, [reviews, movieId]);

  return (
    <>
      {reviews.length === 0 ? (
        <p>Sorry, there are not reviews yet</p>
      ) : (
        <MovieReviews reviews={reviews} />
      )}

      <Outlet />
    </>
  );
};
