import styled from 'styled-components';

export const ReviewItem = styled.li`
  box-shadow: 0px 3px 3px 0px rgba(124, 185, 232, 0.12),
    0px 3px 6px 0px rgba(124, 185, 232, 0.22),
    0px 5px 10px 0px rgba(124, 185, 232, 0.2),
    0px 8px 12px 1px rgba(124, 185, 232, 0.19);
  background-color: rgba(124, 185, 232, 0.5);
  border: 1px solid rgba(124, 185, 232, 0.03);
  border-radius: 6px;
`;

export const ReviewAuthor = styled.p`
  font-family: Simple Games;
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const Author = styled.span`
  font-family: Road;
  margin-right: 10px;
  font-size: 26px;
  color: #2d144c;
`;

export const ReviewsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ReviewContent = styled.p`
  font-family: Sendang;
  font-size: 20px;
  padding: 20px;
  color: #1c2186;
`;
