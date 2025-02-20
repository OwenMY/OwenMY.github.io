import React from "react";
import styled from "styled-components";
import { Switch } from "@mui/material";

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  position: sticky;
  height: 3rem;
  background-color: #111;
  border-bottom: 1px solid white;
`;

const Name = styled.h3`
  margin: auto 1rem;
  color: #edeee8;
  font-family: sans-serif;
  font-weight: bolder;
  font-style: italic;
`;

const ButtonContainer = styled.nav`
  display: flex;
  align-content: flex-end;
  gap: 2rem;
  margin: auto;
`;

const Nav = styled.button`
  color: #edeee8;
  margin: auto;
  font-weight: 500;
  font-size: 1.25rem;
  &:hover {
    position: relative;
    transform: scale(1.2);
    cursor: pointer;
  }
`;

const Navbar = () => {
  return (
    <NavContainer>
      <Name>Owen Yoshishige</Name>
      <ButtonContainer>
        <Nav>Home</Nav>
        <Nav>About</Nav>
        <Nav>Work</Nav>
        <Nav>Contact</Nav>
      </ButtonContainer>
      <Switch />
    </NavContainer>
  );
};

export default Navbar;
