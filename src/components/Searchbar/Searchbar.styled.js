import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
`;

export const Input = styled.input`
  background-color: inherit;
  border: none;
  outline: none;
  border-bottom: 2px solid #3d42a2;
  width: 300px;
  transition: border-bottom 500ms;
  cubic-bezier(0.215, 0.61, 0.355, 1); 

  &:hover,
  &:focus {
    border-bottom: 2px solid aqua;
  }
`;

export const SearchButton = styled.button`
  color: aqua;
  font-size: 20px;
  padding: 0;

  border: none;
  background-color: transparent;
  transition: transform 500 ms cubic-bezier(0.215, 0.61, 0.355, 1);

  &:hover,
  &:focus {
    transform: scale(1.3);
  }
`;
