export const ActorCard = ({ name, character, profile }) => {
  return (
    <>
      <img
        src={
          profile
            ? `https://image.tmdb.org/t/p/w500${profile}`
            : `https://vcunited.club/wp-content/uploads/2020/01/No-image-available-2.jpg`
        }
        alt={name}
      />
      <p>{name}</p>
      <p>Character:{character}</p>
    </>
  );
};
