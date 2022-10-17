import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  margin: 0 0 0 auto;
  width: 30%;
  height: 100vh;
`;

export const Banner = styled.div`
    height: 100%;
    max-height: 100vh;
    width: 80%;
    margin: 0 auto 0 0;
    background-color: ${props => props.theme.secondaryColor};
    background-image: url("/assets/apex-legends-logo.svg");
    background-repeat: no-repeat;
    background-position: top;
    background-size: 100%;
    position: relative;
    border-style: double;
    border-width: 20px;
    border-color: ${props => props.theme.secondaryDarkColor};

`

export const Char = styled.div`
    height: 100vh;
    width: 100%;
    margin: 0;
    padding: 0;
    background-image: url("/assets/Loba2.png");
    background-repeat: no-repeat;
    position: absolute;
    background-size: 100%;
    top: 0;
    left: 0;
`