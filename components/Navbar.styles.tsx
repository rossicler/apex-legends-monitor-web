import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: ${props => props.theme.primaryDarkColor};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0px 80px;
  top: 0;
  left: 0;
  height: 10vh;
`;

export const NavList = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
`;

export const NavItem = styled.a`
  padding: 0px 10px;
  cursor: pointer;
  text-decoration: none;
  color: #FFFFFF;
`;
