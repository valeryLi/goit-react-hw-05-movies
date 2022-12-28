import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavItem = styled(NavLink)`
  font-family: Crispy Cream;
  font-size: 30px;
  color: white;

  &.active {
    color: aqua;
  }
`;

export const NavHeader = styled('nav')`
  padding: 20px;
`;

export const NavList = styled('ul')`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

export const Logo = styled(NavLink)`
  font-family: Coming Soon;
  font-size: 30px;
  color: white;
  margin-right: 700px;
`;
