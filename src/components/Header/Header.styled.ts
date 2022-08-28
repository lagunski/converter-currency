import styled from "styled-components";
import { Navbar, Nav, NavbarBrand } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export const NavBar = styled(Navbar)`
  background-color: lightgrey;
  font-size: 18px;
  margin-right: 15px;
`;

export const Navigation = styled(Nav)`
  margin-left: 50px;
`;

export const NavBarBrand = styled(NavbarBrand)`
  margin-left: 8px;
  margin-right: 8px;
`;

export const Navlink = styled(NavLink)`
  margin-left: 5px;
  margin-right: 5px;
`;
