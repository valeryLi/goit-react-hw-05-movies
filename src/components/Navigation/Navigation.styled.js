import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavItem = styled(NavLink)`
  font-family: Crispy Cream;
  font-size: 24px;
  color: white;

  &.active {
    color: aqua;
  }

  @media (min-width: 480px) {
    font-size: 28px;
  }

  @media (min-width: 768px) {
    font-size: 30px;
  }

  // @media (min-width: 1200px) {
  //   font-size: 30px;
  // }
`;

export const NavHeader = styled('nav')`
  width: 100%;
`;

export const NavList = styled('ul')`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding-top: 10px;
  padding-bottom: 10px;

  @media (min-width: 768px) {
    justify-content: center;
    align-items: center;
    gap: 40px;
  }
`;

export const Logo = styled(NavLink)`
  font-family: Coming Soon;
  color: white;
  font-size: 18px;

  @media (min-width: 480px) {
    font-size: 20px;
  }

  @media (min-width: 768px) {
    font-size: 24px;

    margin-right: 200px;
  }

  @media (min-width: 1200px) {
    font-size: 30px;
    margin-right: 700px;
  } ;
`;
