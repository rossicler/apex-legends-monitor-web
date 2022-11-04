import React from "react";

// components
import { Container, NavList, NavItem } from "./Navbar.styles";

const Navbar = () => {
  return (
    <Container>
      <NavItem href="/">Apex Monitor</NavItem>
      <NavList>
        <NavItem>Player Statistics</NavItem>
        <NavItem>Map Rotation</NavItem>
        <NavItem>Store</NavItem>
        <NavItem href="/crafting">Crafting Rotation</NavItem>
      </NavList>
    </Container>
  );
};

export default Navbar;
