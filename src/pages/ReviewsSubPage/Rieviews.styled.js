import styled from 'styled-components';

export const RieviewsContainer = styled.div`
  width: 80%;
  margin: 10px auto;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0px 3px 3px 0px rgba(65, 105, 225, 0.12),
    0px 3px 6px 0px rgba(65, 105, 225, 0.22),
    0px 5px 10px 0px rgba(65, 105, 225, 0.2),
    0px 8px 12px 1px rgba(65, 105, 225, 0.19);
  background-color: rgba(65, 105, 225, 0.5);
  border: 1px solid rgba(65, 105, 225, 0.03);

  @media (min-width: 480px) {
    padding: 10px;
    width: 85%;
  }
  @media (min-width: 1200px) {
    width: 60%;
    margin: 20px auto;
  }
`;
