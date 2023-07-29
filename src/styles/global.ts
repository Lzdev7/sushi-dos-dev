import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }

  li, a {
    text-decoration: none;
    list-style: none;
  }

  .container {
    display: flex;
    justify-content:center;
    gap: 24rem;
    align-items: center;
    margin-top: 1rem;
  }


`;