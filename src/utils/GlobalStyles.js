import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
h1,h2,h3,h4,h5,h6,p {
    margin: 0;
  }

  ul,ol{
    list-style: none;
    margin-top: 0;
    margin-bottom: 0;
    margin-left: 0;
    padding: unset;
  }

  button{
    cursor:pointer;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
}

a{
    text-decoration: none;
}

`;
