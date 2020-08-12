import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 62.5%;
  }

  body {
    margin: 0;
    font-size: 1.6rem;
    font-family: "Montserrat", sans-serif;
  }

  textarea, input, button, select { 
    font-family: inherit;
    font-size: inherit;
  }

  textarea:focus, input:focus {
    outline: none;
    box-shadow: 0 0 1pt 1pt black;
  }

  .is-invalid {
    border-color: #dc3545;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`;

export default GlobalStyle;
