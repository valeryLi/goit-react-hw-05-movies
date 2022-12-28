import styled from 'styled-components';

export const MovieCard = styled.div`
  position: relative;
  border-bottom: 1px solid aqua;
  border-radius: 20px;
  text-align: center;
  transition: box-shadow 500ms cubic-bezier(0.215, 0.61, 0.355, 1);

  &:hover,
  &:focus {
    box-shadow: 0px 3px 3px 0px rgba(0, 255, 255, 0.12),
      0px 3px 6px 0px rgba(0, 255, 255, 0.22),
      0px 5px 10px 0px rgba(0, 255, 255, 0.2),
      0px 8px 12px 1px rgba(0, 255, 255, 0.19);
  }
`;

export const Image = styled.img`
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const MovieCardTitle = styled.p`
  font-family: Simple Games;
  font-size: 25px;
  font-weight: bold;
  color: black;
  padding: 10px;
`;

export const Rating = styled.p`
  position: absolute;
  top: 8px;
  left: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;

  border-radius: 50%;
  background-color: aqua;
  color: #545abe;
`;
