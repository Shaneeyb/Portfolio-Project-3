import React from "react";
import { Navbar, Nav, Offcanvas, Container } from "react-bootstrap";


function NavbarComponent() {
  const logoStyle = {
    width: "80px",
    height: "80px",
  };
  const styles={
    color: "white",
    padding: "30px",
    fontSize: 50
  }
  return (
    <div>
  <Navbar bg="#FFFAF3" variant="light">
    <Container>
    <Navbar.Brand href="#home">Shane Burke</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Recent Work</Nav.Link>
      <Nav.Link href="#features">About</Nav.Link>
      <Nav.Link href="#pricing">Skills</Nav.Link>
      <Nav.Link href="#pricing">Contact</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
</div>
  );
}

export default NavbarComponent;