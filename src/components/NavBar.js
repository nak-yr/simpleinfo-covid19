import React from "react";
import { Navbar } from "react-bootstrap";

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="secondary" variant="dark">
      <Navbar.Brand href="#home">Simpleinfo Covid-19</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav"></Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
