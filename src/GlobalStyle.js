import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    --white: #ffffff;
    --main-black: rgb(27,27,27);
    --main-grey: #272727;
    --grey: rgb(128,128,128);
    --dimgrey: rgb(105,105,105);

    --font-sm: 0.875rem;
    --font-base: 1rem;
    --font-lg: 1.125rem;
    --font-xl: 1.25rem;
  } 

  body {
    font-family: "Helvetica", "Arial", sans-serif;
    color: var(--white);
    line-height: 1.5;
    margin: 0;
    background-color: var(--main-grey);
  }

  h2, p { 
    margin: 0;
  }

  h2 {
    font-size: 1.5rem;
  }

  p {
    font-size: 1rem;
  }
`;

export default GlobalStyle;