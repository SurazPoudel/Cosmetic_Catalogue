import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import smartLogo from "./assets/icon/smart..png";
import "./nav.css";

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-white">
      <Container fluid>
        <img
          style={{ width: "120px", marginRight: "50px", marginLeft: "20px" }}
          src={smartLogo}
          alt="Smart Logo"
        />
        <Navbar.Toggle aria-controls="navbarScroll" className="menu-icon" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100vh" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2" className="fw-bold">Cosmetic</Nav.Link>
            <Nav.Link href="#action3">Gadgets</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown" aria-label="Social Media Links">
              <NavDropdown.Item href="#action3">Instagram</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Whatsapp</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Twitter</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Contact
            </Nav.Link>
          </Nav>
          <Form className="d-flex mr-3">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 border-dark"
              aria-label="Search"
            />
            <Button variant="outline-dark" aria-label="Search">Search</Button>
          </Form>
          
          <div className="d-flex justify-content-center align-items-center h-100 nav-icons">
            <span style={{ marginRight: '20px' }} className="material-symbols-outlined fs-2 fw-light sp-bag">local_mall</span>
            <span style={{ marginRight: '20px' }} className="material-symbols-outlined fs-2 fw-light">account_circle</span>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;