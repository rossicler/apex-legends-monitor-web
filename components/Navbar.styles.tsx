import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: ${props => props.theme.primaryDarkColor};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  padding: 0px 80px;
  /* position: absolute; */
  top: 0;
  left: 0;
  height: 60px;
`;

export const NavList = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
`;

export const NavItem = styled.span`
  padding: 0px 10px;
  cursor: pointer;
`;
