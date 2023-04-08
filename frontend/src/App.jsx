import "./App.css";
import NavBar from "./components/NavBar/NavBar.jsx";
// import FormControl from "@mui/material/FormControl";
// import Button from "@mui/material/Button";
// import TextField from "@mui/material/TextField";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DisplayQuotes from "./components/DisplayQuotes/DisplayQuotes";
import SubmitQuotes from "./components/SubmitQuotes/SubmitQuotes";
import { useState, useEffect } from "react";

function App() {
  const [allQuoteList, setQuoteList] = useState([]);

  return (
    <div className="App">
      {/* DONE - TODO: include an icon for the quote book */}
      <Container fluid>
        <Row>
          <NavBar />
        </Row>
        <Row className="mt-5">
          <Col>
            <SubmitQuotes setQuoteList={setQuoteList} />
          </Col>
          <Col>
            {/* DONE - TODO: Display the actual quotes from the database */}
            <DisplayQuotes setQuoteList={setQuoteList} quotes={allQuoteList} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
