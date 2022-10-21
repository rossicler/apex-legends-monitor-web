import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  html,
  body, #__next {
    height: 100vh;
    width: 100%;
    margin: 0;
    padding: 0;
    background: #E5E1D8;
    color: #fff;
    font-family: 'Lato', sans-serif;
  }
`