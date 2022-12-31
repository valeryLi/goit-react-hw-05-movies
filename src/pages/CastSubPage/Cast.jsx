import { ActorsList } from 'components/ActorsList/ActorsList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieActors } from 'services/moviesApi';
import { actorsMapper } from 'utils/actorsMapper';
import { ActorsContainer } from './Cast.styled';
import { Loader } from 'components/Loader/Loader';

const Cast = () => {
  const [actors, setActors] = useState([]);
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function searchActors() {
      setIsLoading(true);
      const actorsArray = await fetchMovieActors(movieId);
      const filtredActors = actorsMapper(actorsArray);

      setActors(filtredActors);
      setIsLoading(false);
    }
    searchActors();
  }, [movieId]);
  return (
    <ActorsContainer>
      {isLoading && <Loader />}

      {actors.length === 0 && !isLoading ? (
        <p>Sorry, there are no info about actors</p>
      ) : (
        <ActorsList actors={actors} />
      )}
    </ActorsContainer>
  );
};

export default Cast;
