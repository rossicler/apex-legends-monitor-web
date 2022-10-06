import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 80px;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  height: 60px;
`;

export const NavList = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
`;

export const NavItem = styled.span`
  padding: 0px 10px;
  cursor: pointer;
`;
