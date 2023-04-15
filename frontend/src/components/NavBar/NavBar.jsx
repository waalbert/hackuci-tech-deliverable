import "./NavBar.css";
import logo from "../../../quotebook.png";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

function NavBar() {
  return (
    <Navbar>
      <Container fluid>
        <Navbar.Brand>
          <Image
            alt="Picture of Logo"
            src={logo}
            className="title-img align-middle"
            fluid
          ></Image>{" "}
          <h1 className="h1 align-middle d-inline title">
            Hack @ UCI Tech Deliverable
          </h1>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavBar;
