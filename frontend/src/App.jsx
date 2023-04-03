import "./App.css";
import NavBar from "./components/NavBar/NavBar.jsx";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DisplayQuotes from "./components/DisplayQuotes/DisplayQuotes";
import { useState, useEffect } from "react";
import axios from "axios";

const URL = "http://127.0.0.1:8000";

function App() {
  const [quoteList, setQuoteList] = useState([]);
  // let quoteList = [];
  useEffect(() => {
    axios
      .get(`${URL}/get-quotes?age=all`)
      .then((response) => {
        // console.log(response);
        setQuoteList(response["data"]["data"]);
        // console.log(quoteList);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="App">
      {/* DONE - TODO: include an icon for the quote book */}
      <Container fluid>
        <Row>
          <NavBar />
        </Row>
        <Row className="mt-5">
          <Col>
            <h2 className="submit-quote">Submit a quote</h2>
            {/* TODO: implement custom form submission logic to not refresh the page */}
            <form action="/api/quote" method="post" className="submit-quote">
              {/* <label htmlFor="input-name">Name</label>
        <input type="text" name="name" id="input-name" required />
        <label htmlFor="input-message">Quote</label>
        <input type="text" name="message" id="input-message" required /> */}
            </form>
            <div>
              <TextField
                variant="standard"
                size="small"
                label="Name"
              ></TextField>
            </div>
            <div>
              <TextField
                variant="standard"
                size="small"
                label="Quote"
              ></TextField>
            </div>
            {/* <button type="submit">Submit</button> */}
            <Button
              variant="contained"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              Submit
            </Button>
          </Col>
          <Col>
            <DisplayQuotes quotes={quoteList} />
          </Col>
        </Row>
      </Container>
      {/* TODO: Display the actual quotes from the database */}
    </div>
  );
}

export default App;
