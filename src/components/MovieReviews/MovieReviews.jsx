import PropTypes from 'prop-types';

import {
  ReviewItem,
  ReviewAuthor,
  Author,
  ReviewsList,
  ReviewContent,
} from './MovieReviews.styled';

export const MovieReviews = ({ reviews }) => {
  return (
    <ReviewsList>
      {reviews.map(review => {
        return (
          <ReviewItem key={review.id}>
            <ReviewAuthor>
              <Author>Author:</Author>
              {review.author}
            </ReviewAuthor>
            <ReviewContent>{review.content}</ReviewContent>
          </ReviewItem>
        );
      })}
    </ReviewsList>
  );
};

MovieReviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string,
    }).isRequired
  ),
};
