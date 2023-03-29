import "./App.css";
import NavBar from "./components/NavBar.jsx";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function App() {
  return (
    <div className="App">
      {/* DONE - TODO: include an icon for the quote book */}
      <Container fluid>
        <Row>
          <NavBar />
        </Row>
        <Row className="mt-5">
          <h2 className="submit-quote">Submit a quote</h2>
          {/* TODO: implement custom form submission logic to not refresh the page */}
          <form action="/api/quote" method="post" className="submit-quote">
            {/* <label htmlFor="input-name">Name</label>
        <input type="text" name="name" id="input-name" required />
        <label htmlFor="input-message">Quote</label>
        <input type="text" name="message" id="input-message" required /> */}
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
          </form>
        </Row>
      </Container>

      {/* <h2>Previous Quotes</h2> */}
      {/* TODO: Display the actual quotes from the database */}
      {/* <div className="messages">
        <p>Peter Anteater</p>
        <p>Zot Zot Zot!</p>
        <p>Every day</p>
      </div> */}
    </div>
  );
}

export default App;
