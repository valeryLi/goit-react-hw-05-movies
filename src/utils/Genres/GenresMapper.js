import s from './Genres.module.css';

export const GenresMapper = ({ genres }) => {
  return (
    <ul className={s.genresList}>
      {genres.map(({ id, name }) => (
        <li className={s.genresItem} key={id}>
          {name}
        </li>
      ))}
    </ul>
  );
};
