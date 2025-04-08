import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import smartLogo from "./assets/smart-icon.png";
import { BsCart2, BsPerson } from "react-icons/bs";
import "./nav.css";

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-white shadow-sm py-3" sticky="top">
      <Container>
        <Navbar.Brand href="#">
          <img src={smartLogo} alt="Smart Logo" className="nav-logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="menu-icon" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Cosmetics</Nav.Link>
            <Nav.Link href="#">Gadgets</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
          </Nav>
          <div className="nav-icons d-flex align-items-center">
            <BsCart2 className="nav-icon" />
            <BsPerson className="nav-icon" />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
