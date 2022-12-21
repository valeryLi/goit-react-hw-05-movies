import { ActorCard } from 'components/ActorCard/ActorCard';

export const ActorsList = ({ actors }) => {
  return (
    <ul>
      here is actors list
      {/* {actors.map(actor => {
        return (
          <li key={actor.id}>
            <ActorCard
              name={actor.name}
              charekter={actor.charekter}
              image={actor.profile_path}
            />
           
          </li>
        );
      })} */}
    </ul>
  );
};
