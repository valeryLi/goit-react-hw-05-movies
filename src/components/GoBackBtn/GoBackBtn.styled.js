import styled from 'styled-components';

export const ButtonGoBack = styled.button`
  display: flex;
  align-items: center;
  width: 120px;
  font-size: 16px;
  font-weight: 600;
  color: #2d144c;

  margin: 0 200px;
  height: 55px;
  text-align: center;
  border: none;
  background-size: 300% 100%;
  background-image: linear-gradient(
    to right,
    #667eea,
    #764ba2,
    #6b8dd6,
    #8e37d7
  );
  box-shadow: 0 4px 15px 0 rgba(116, 79, 168, 0.75);

  border-radius: 50px;
  moz-transition: all 0.4s ease-in-out;
  -o-transition: all 0.4s ease-in-out;
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;

  &:hover {
    background-position: 100% 0;
    moz-transition: all 0.4s ease-in-out;
    -o-transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
  }
`;
