import React from "react";

import { Nav, NavItem, NavNav, NavLink } from "./styled";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavNav>
          <NavItem>
            <NavLink href="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/sobre">Sobre</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/portfolio">Portfolio</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/blog">Blog</NavLink>
          </NavItem>
        </NavNav>
      </Nav>
    </>
  );
};

export default Navbar;
