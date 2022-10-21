import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-image: url("/assets/background-image.jpg");
  background-repeat: no-repeat;
`
export const Title = styled.h1`
  color: ${props => props.theme.primaryDarkColor};
  padding-left: 50px;
`

export const Subtitle = styled.h3`
  color: ${props => props.theme.primaryDarkColor};
  padding-left: 50px;
  margin: 5px;
`

export const Logo = styled.div`
  align-self: center;
  height: 300px;
  width: 30%;
  background-image: url('/assets/ApexMonitorLogo.png');
  background-size: 290px;
  background-repeat: no-repeat;
  background-position: center;
`