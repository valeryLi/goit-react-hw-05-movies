import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  height: 50px;
  padding: 20px 0;
  background-color: #545abe;

  box-shadow: 0px 3px 3px 0px rgba(0, 255, 255, 0.12),
    0px 3px 6px 0px rgba(0, 255, 255, 0.22),
    0px 5px 10px 0px rgba(0, 255, 255, 0.2),
    0px 8px 12px 1px rgba(0, 255, 255, 0.19);

  @media (min-width: 768px) {
  }
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 20px;

  width: 100%;
  height: 80px;
  background-color: #545abe;
  color: aqua;
`;
