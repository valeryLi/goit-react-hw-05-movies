import styled from 'styled-components';

export const MovieDescriptionContainer = styled.div`
  display: flex;
  gap: 10px;

  margin: 20px auto;
  width: 70%;
  border-radius: 20px;
  box-shadow: 0px 3px 3px 0px rgba(65, 105, 225, 0.12),
    0px 3px 6px 0px rgba(65, 105, 225, 0.22),
    0px 5px 10px 0px rgba(65, 105, 225, 0.2),
    0px 8px 12px 1px rgba(65, 105, 225, 0.19);
  background-color: rgba(65, 105, 225, 0.5);
  border: 1px solid rgba(65, 105, 225, 0.03);
`;

export const MoviePoster = styled.img`
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  width: 280px;
  min-height: 400px;
`;

export const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 20px;
  padding: 20px;
`;

export const MovieInfoItem = styled.li`
  padding-bottom: 20px;
`;

export const MovieInfoTitle = styled.h3`
  font-family: Road;
  font-size: 20px;
  color: #1c2186;
`;

export const MovieInfoText = styled.p`
  font-family: Goodbye;
  font-size: 25px;
  color: white;
`;

export const MovieTitle = styled.h2`
  font-family: Dash;
  font-size: 40px;
  text-align: center;
  color: #1c2186;
`;
