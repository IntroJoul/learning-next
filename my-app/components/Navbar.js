import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { default as BoostrapNavbar } from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function Navbar() {
  return (
    <BoostrapNavbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <BoostrapNavbar.Brand href="#home">
          React-Bootstrap
        </BoostrapNavbar.Brand>
        <BoostrapNavbar.Toggle aria-controls="responsive-BoostrapNavbar-nav" />
        <BoostrapNavbar.Collapse id="responsive-BoostrapNavbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">placeholder</Nav.Link>
            <Nav.Link href="#pricing">placeholder</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More placeholders</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              another placeholder lol
            </Nav.Link>
          </Nav>
        </BoostrapNavbar.Collapse>
      </Container>
    </BoostrapNavbar>
  );
}
