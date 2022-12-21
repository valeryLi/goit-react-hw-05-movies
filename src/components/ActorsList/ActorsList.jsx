import { ActorCard } from 'components/ActorCard/ActorCard';

export const ActorsList = ({ actors }) => {
  return (
    <ul>
      {actors.map(actor => {
        return (
          <li key={actor.id}>
            <ActorCard
              name={actor.name}
              character={actor.character}
              profile={actor.profile_path}
            />
          </li>
        );
      })}
    </ul>
  );
};
