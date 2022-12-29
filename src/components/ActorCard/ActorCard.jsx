import {
  ActorImage,
  ActorInfo,
  ActorName,
  Character,
} from './ActorCard.styled';
export const ActorCard = ({ name, character, profile }) => {
  return (
    <>
      <ActorImage
        src={
          profile
            ? `https://image.tmdb.org/t/p/w500${profile}`
            : `https://vcunited.club/wp-content/uploads/2020/01/No-image-available-2.jpg`
        }
        alt={name}
        width={280}
        height={430}
      />
      <ActorInfo>
        <ActorName>{name}</ActorName>
        <Character>{character}</Character>
      </ActorInfo>
    </>
  );
};
