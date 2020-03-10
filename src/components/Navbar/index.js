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
            <NavLink href="/repositorios">Repositorios</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/skills">Habilidades</NavLink>
          </NavItem>
        </NavNav>
      </Nav>
    </>
  );
};

export default Navbar;
