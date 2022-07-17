import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    outline: none;
    box-sizing: border-box;
  }

  html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }

  img {
    max-width: 100%;
  }

  body {
    font-family: 'Open Sans';
    margin: 0;
    padding: 0;
    background-color: ${props => props.theme.appContainer};
  }

  body, button, a {
    color: ${props => props.theme.mainColor};
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  button {
    border: 0;
    margin: 0;
    display: flex;
    align-items: center;
    background-color: ${props => props.theme.bgButton};
    color: #fff;
    border-radius: 8px;
    padding: 12px 16px;
    font-size: 14px;
    cursor: pointer;
    font-family: 'Open Sans';
  }

  input {
    font-family: "Open Sans";
    background-color: ${props => props.theme.bgInput};
    width: 100%;
    border: 0;
    font-size: 14px;
    color: ${props => props.theme.mainColor};

    &:focus {
      outline: none;
    }
  }
`;

export default GlobalStyle;