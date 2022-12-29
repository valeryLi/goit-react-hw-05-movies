import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieDescriptionContainer = styled.div`
  width: 90%;
  gap: 10px;
  margin: 10px auto;

  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  box-shadow: 0px 3px 3px 0px rgba(65, 105, 225, 0.12),
    0px 3px 6px 0px rgba(65, 105, 225, 0.22),
    0px 5px 10px 0px rgba(65, 105, 225, 0.2),
    0px 8px 12px 1px rgba(65, 105, 225, 0.19);
  background-color: rgba(65, 105, 225, 0.5);
  border: 1px solid rgba(65, 105, 225, 0.03);

  @media (min-width: 768px) {
    display: flex;
  }
  @media (min-width: 1200px) {
    width: 70%;
    margin: 20px auto 0 auto;
  }
`;

export const MoviePoster = styled.img`
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  width: 100%;

  @media (min-width: 480px) {
    margin: 0 auto;
    padding-top: 10px;
    border-radius: 0;

    width: 300px;
  }

  @media (min-width: 768px) {
    margin: 0;
    padding-top: 0px;
    border-top-left-radius: 20px;
  }
  @media (min-width: 1200px) {
    width: 280px;
    min-height: 400px;
  }
`;

export const MovieInfo = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

export const MovieInfoItem = styled.li`
  padding-bottom: 20px;
`;

export const MovieInfoTitle = styled.h3`
  font-family: Simple Games;
  font-size: 30px;
  color: #1c2186;

  @media (min-width: 480px) {
    padding-top: 20px;
  }
`;

export const MovieInfoText = styled.p`
  font-family: Goodbye;
  font-size: 25px;
  color: white;
`;

export const MovieTitle = styled.h2`
  font-family: Road;
  font-size: 36px;
  text-align: center;
  color: #1c2186;
`;

export const AdditionalInfoContainer = styled.div`
  padding-bottom: 10px;
  margin: 10px auto;
  width: 90%;

  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  background-color: rgba(65, 105, 225, 0.5);
  box-shadow: 0px 3px 3px 0px rgba(0, 255, 255, 0.12),
    0px 3px 6px 0px rgba(0, 255, 255, 0.22),
    0px 5px 10px 0px rgba(0, 255, 255, 0.2),
    0px 8px 12px 1px rgba(0, 255, 255, 0.19);

  @media (min-width: 1200px) {
    margin: 0 auto 20px auto;
    width: 70%;
  }
`;

export const AdditionalInfoTitle = styled.h3`
  text-align: center;
  padding: 20px 0;

  font-family: Road;
  font-size: 30px;
  color: #1c2186;
`;

export const AdditionalInfoList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
`;

export const AdditionalInfoLink = styled(Link)`
  font-family: Sendang;
  font-size: 24px;
  color: white;
`;
