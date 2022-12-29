import { ActorsList } from 'components/ActorsList/ActorsList';
import { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { fetchMovieActors } from 'services/moviesApi';
import { actorsMapper } from 'utils/actorsMapper';
import { ActorsContainer } from './Cast.styled';

export const Cast = () => {
  const [actors, setActors] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    if (actors) {
      async function searchActors() {
        const actorsArray = await fetchMovieActors(movieId);
        const filtredActors = actorsMapper(actorsArray);

        setActors(filtredActors);
      }
      searchActors();
    }
  }, [actors, movieId]);
  return (
    <ActorsContainer>
      {actors.length === 0 ? (
        <p>Sorry, there are no info about actors</p>
      ) : (
        <ActorsList actors={actors} />
      )}

      <Outlet />
    </ActorsContainer>
  );
};
