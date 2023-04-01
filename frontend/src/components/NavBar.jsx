import "./NavBar.css";
import logo from "../../quotebook.png";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

function NavBar() {
  return (
    <Navbar>
      <Container fluid>
        <Navbar.Brand>
          <img alt="" src={logo} className="title-img align-middle"></img>{" "}
          <h1 className="title align-middle d-inline">
            Hack @ UCI Tech Deliverable
          </h1>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavBar;
