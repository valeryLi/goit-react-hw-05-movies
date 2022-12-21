export const moviesMapper = array => {
  return array.map(
    ({ id, title, poster_path, vote_average, release_date }) => ({
      id,
      title,
      poster_path,
      release_date,
      vote_average,
    })
  );
};
