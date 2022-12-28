import styled from 'styled-components';

export const List = styled.li`
  color: dark-blue;
  font-size: 18px;
  margin: 20px;

  &:focus {
    color: red;
  }
`;

export const MoviesGallery = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(180px, 320px));
  grid-gap: 16px;
  justify-content: center;

  margin-left: auto;
  margin-right: auto;
`;
