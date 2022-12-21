import { NavList } from './Navigation.styled';

export const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavList to="/" end>
            Home
          </NavList>
        </li>
        <li>
          <NavList to="/movies">Movies</NavList>
        </li>
      </ul>
    </nav>
  );
};
