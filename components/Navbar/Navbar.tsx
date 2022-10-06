import React from "react";

// components
import { Container, NavList, NavItem } from "./Navbar.styles";

const Navbar = () => {
  return (
    <Container>
      <span>Apex Monitor</span>
      <NavList>
        <NavItem>Player Statistics</NavItem>
        <NavItem>Map Rotation</NavItem>
        <NavItem>Store</NavItem>
        <NavItem>Crafting Rotation</NavItem>
      </NavList>
    </Container>
  );
};

export default Navbar;
