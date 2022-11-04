import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @font-face {
    font-family: 'Apex';
    src: url('/assets/Apex-Regular.otf');
  }

  * {
    box-sizing: border-box;
  }
  
  html,
  body, #__next {
    height: 90vh;
    width: 100%;
    margin: 0;
    padding: 0;
    background: #E5E1D8;
    background-image: url('/assets/background-image.jpg');
    background-repeat: no-repeat;
    background-position: center;
    color: #fff;
    font-family: 'Apex', sans-serif;
  }
`