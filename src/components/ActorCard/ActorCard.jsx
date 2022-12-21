export const ActorCard = ({ name, character, profile }) => {
  return (
    <>
      <img src={`https://image.tmdb.org/t/p/w500${profile}`} alt={name} />
      <p>{name}</p>
      <p>Character:{character}</p>
    </>
  );
};
