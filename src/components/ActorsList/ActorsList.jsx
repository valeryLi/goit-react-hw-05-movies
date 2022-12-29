import { ActorCard } from 'components/ActorCard/ActorCard';
import { ActorsListStyled, ActorsListItem } from './ActorsList.styled';

export const ActorsList = ({ actors }) => {
  return (
    <ActorsListStyled>
      {actors.map(actor => {
        return (
          <ActorsListItem key={actor.id}>
            <ActorCard
              name={actor.name}
              character={actor.character}
              profile={actor.profile_path}
            />
          </ActorsListItem>
        );
      })}
    </ActorsListStyled>
  );
};
