export const ActorCard = ({ name, character, poster }) => {
  return (
    <>
      <img src={`https://image.tmdb.org/t/p/w500${poster}`} alt={name} />
      <p>{name}</p>
      <p>{character}</p>
    </>
  );
};
