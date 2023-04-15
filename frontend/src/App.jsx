import "./App.css";
import NavBar from "./components/NavBar/NavBar.jsx";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DisplayQuotes from "./components/DisplayQuotes/DisplayQuotes";
import SubmitQuotesForm from "./components/SubmitQuotesForm/SubmitQuotesForm";
import { useState } from "react";

function App() {
  const [allQuoteList, setQuoteList] = useState([]);

  return (
    <div className="App google-font">
      {/* DONE - TODO: include an icon for the quote book */}
      <Container fluid>
        <Row>
          <NavBar />
        </Row>
        <Row className="text-center" lg={2} md={1} sm={1} xs={1}>
          <Col className="mb-3 submit-quote">
            <SubmitQuotesForm setQuoteList={setQuoteList} />
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
