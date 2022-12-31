import { fetchMovies } from 'services/moviesApi';
import { useState, useEffect } from 'react';
import { HomeTitle } from './HomePage.styled';
import { Loader } from 'components/Loader/Loader';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { moviesMapper } from 'utils/moviesMapper';

const HomePage = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function searchTrendMovies() {
      setIsLoading(true);
      const trendMoviesArray = await fetchMovies();
      const filtredMovies = moviesMapper(trendMoviesArray);

      setTrendMovies(filtredMovies);
      setIsLoading(false);
    }
    searchTrendMovies();
  }, []);

  return (
    trendMovies && (
      <>
        <HomeTitle>Trending today</HomeTitle>
        {isLoading && <Loader />}
        <MoviesList movies={trendMovies} />
      </>
    )
  );
};

export default HomePage;
