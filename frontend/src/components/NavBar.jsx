import "./NavBar.css";
import logo from "../../quotebook.png";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="lg">
      <Container fluid>
        <Navbar.Brand>
          <img
            alt=""
            src={logo}
            // width="50px"
            // height="50px"
            className="title-img align-middle"
          ></img>{" "}
          <h1 className="title align-middle d-inline">
            Hack @ UCI Tech Deliverable
          </h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#submit">Submit a Quote</Nav.Link>
            <Nav.Link href="#previous">Previous Quotes</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
