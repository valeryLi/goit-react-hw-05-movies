import styled from 'styled-components';

export const MovieCard = styled.div`
border-bottom: 1px solid grey;
  border-radius: 20px;
  text-align: center;
  transition: box-shadow 500ms cubic-bezier(0.215, 0.61, 0.355, 1);

  &:hover,
  &:focus {
    box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.12);
      0px 3px 6px 0px rgba(0, 0, 0, 0.22), 0px 5px 10px 0px rgba(0, 0, 0, 0.2),
      0px 8px 12px 1px rgba(0, 0, 0, 0.19);
    border: 1px solid rgba(0, 0, 0, 0.03);
  }
`;

export const Image = styled.img`
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;
