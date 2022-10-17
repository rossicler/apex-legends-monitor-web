import styled from "styled-components";

export const Container = styled.div`
  padding-top: 30px;
  padding-left: 60px;
  display: flex;
  flex-direction: row;
  align-content: f;
  width: 100%;
`
export const LogoImg = styled.div`
  padding-right: 100px;
  background-image: url("/assets/apexlogo.png");
  background-repeat: no-repeat;
  background-size: 100px;
`

export const Title = styled.h1`
  color: ${props => props.theme.primaryDarkColor};
`