import styled from "styled-components";

export const Container = styled.div`
  /* background-color: ${props => props.theme.secondaryColor};
  background-image: url("/assets/apex-legends-logo.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%; */
  position: relative;
  margin: 0 0 0 auto;
  width: 30%;
  height: 100vh;
`;

export const Banner = styled.div`
    height: 100%;
    max-height: 100vh;
    width: 80%;
    margin: 0 0 0 auto;
    background-color: ${props => props.theme.secondaryColor};
    background-image: url("/assets/apex-legends-logo.svg");
    background-repeat: no-repeat;
    background-position: top;
    background-size: 100%;
    position: relative;
    right: 0%;
`

export const Char = styled.div`
    height: 100vh;
    width: 100%;
    background-image: url("/assets/Loba2.png");
    background-repeat: no-repeat;
    position: absolute;
    background-size: 100%;
    top: 0;
    left: 0;
`