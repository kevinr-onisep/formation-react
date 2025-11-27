import { Container, Nav, Navbar as NavBar } from "react-bootstrap";

import "../../../../../node_modules/bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <NavBar
      expand="lg"
      className="bg-body-tertiary"
      bg="dark"
      data-bs-theme="dark"
    >
      <Container>
        <NavBar.Brand href="#home">React-Bootstrap</NavBar.Brand>
        <NavBar.Toggle aria-controls="basic-navbar-nav" />
        <NavBar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="mx-2" to={"/home"}>Home</Link>
            <Link className="mx-2" to={"/thumbs"}>Thumbs</Link>
            <Link className="mx-2" to={"/editor"}>Editor</Link>
          </Nav>
        </NavBar.Collapse>
      </Container>
    </NavBar>
  );
};

export default Navbar;
