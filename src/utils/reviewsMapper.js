export const reviewsMapper = array => {
  return array.map(({ id, author, content }) => ({
    id,
    author,
    content,
  }));
};
