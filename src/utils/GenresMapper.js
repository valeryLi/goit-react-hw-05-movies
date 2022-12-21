export const GenresMapper = ({ genres }) => {
  return (
    <ul>
      {genres.map(({ id, name }) => (
        <li key={id}>{name}</li>
      ))}
    </ul>
  );
};
