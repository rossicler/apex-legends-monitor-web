import styled from "styled-components";

interface Props {
  charUrl: string;
}

export const Container = styled.div`
  position: relative;
  margin: 0 0 0 auto;
  width: 30%;
  height: 100% !important;
`;

export const Banner = styled.div`
    height: 100%;
    width: 80%;
    margin: 0 auto 0 0;
    background-color: ${props => props.theme.secondaryColor};
    background-image: url("/assets/apex-legends-logo.svg");
    background-repeat: no-repeat;
    background-position: top;
    background-size: 100%;
    border-style: double;
    border-width: 20px;
    border-color: ${props => props.theme.secondaryDarkColor};

`

export const Char = styled.div<Props>`
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    background-image: url(${props => props.charUrl});
    background-repeat: no-repeat;
    position: absolute;
    background-size: 100%;
    top: 0;
    left: 0;
`