import { NavItem, NavList, NavHeader, Logo } from './Navigation.styled';
import { ImVideoCamera } from 'react-icons/im';

const fontStyles = { color: 'white', fontSize: '30px', marginLeft: '2px' };

export const Navigation = () => {
  return (
    <NavHeader>
      <NavList>
        <li>
          <Logo to={'/'}>
            MovieWorld
            <ImVideoCamera style={fontStyles} />
          </Logo>
        </li>
        <li>
          <NavItem to="/" end>
            Home
          </NavItem>
        </li>
        <li>
          <NavItem to="/movies">Movies</NavItem>
        </li>
      </NavList>
    </NavHeader>
  );
};
