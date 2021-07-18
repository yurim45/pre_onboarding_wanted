import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset}

    * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

    a {
    text-decoration: none;
    color: inherit;
  }

    li {
    list-style: none;
  }

    button,
  input {
    border: none;
    outline: none;
    background-color: transparent;
    font-family: inherit;
    cursor: pointer;
  }
`;

export default GlobalStyles;
