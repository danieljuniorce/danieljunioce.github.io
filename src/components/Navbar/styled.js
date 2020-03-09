import styled from "styled-components";

export const Nav = styled.nav`
  height: 60px;
  line-height: 60px;
  margin-bottom: 20px;
`;

export const NavNav = styled.ul`
  display: inline-flex;
  list-style: none;
`;

export const NavItem = styled.li`
  font-size: 19pt;
  padding: 10px;
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: #333;

  &:hover {
    color: #323;
    text-decoration: underline;
  }
`;
