import { FC } from "react";
import { NavLink } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import * as S from "./Header.styled";

const Header: FC = () => {
  return (
    <div>
      <S.NavBar>
        <Container>
          <S.NavBar>Currency converter</S.NavBar>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <S.Navigation>
              <NavLink
                to="/"
                style={({ isActive }) => ({
                  marginRight: 10,
                  color: isActive ? "red" : "",
                  textDecoration: isActive ? "underline" : "",
                })}
              >
                Converter
              </NavLink>
              <NavLink
                to="/history"
                style={({ isActive }) => ({
                  color: isActive ? "red" : "",
                  textDecoration: isActive ? "underline" : "",
                })}
              >
                History
              </NavLink>
            </S.Navigation>
          </Navbar.Collapse>
        </Container>
      </S.NavBar>
    </div>
  );
};

export default Header;
