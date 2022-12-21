import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieActors } from 'services/moviesApi';

export const useFetchActors = () => {
  const [actor, setActor] = useState(null);
  const { movieId } = useParams();
  //   console.log(movieId);

  useEffect(() => {
    fetchMovieActors(movieId).then(setActor);
  }, [movieId]);

  return actor;
};
