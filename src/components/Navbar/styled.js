import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  height: 60px;
  text-align: center;
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
  color: white;

  &:hover {
    color: #512d8a;
    text-decoration: underline;
  }
`;
