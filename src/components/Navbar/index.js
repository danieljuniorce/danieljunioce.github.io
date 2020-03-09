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
            <NavLink href="/">Sobre</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/">Portfolio</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/">Blog</NavLink>
          </NavItem>
        </NavNav>
      </Nav>
    </>
  );
};

export default Navbar;
