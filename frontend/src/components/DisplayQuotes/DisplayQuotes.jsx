import { useState, useEffect } from "react";
import Quote from "../Quote/Quote";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import axios from "axios";

const URL = "http://127.0.0.1:8000";

function DisplayQuotes(props) {
  const [quoteNumber, setQuoteNumber] = useState(1);
  const [quoteAge, setQuoteAge] = useState("all");
  const [quoteList, changeQuoteList] = useState([...props.quotes]);
  useEffect(() => {
    axios
      .get(`${URL}/get-quotes?age=${quoteAge}`)
      .then((response) => {
        const quotes = response["data"]["data"];
        if (quotes.length == 0) {
          setQuoteNumber(0);
        } else {
          setQuoteNumber(1);
        }
        changeQuoteList(quotes);
      })
      .catch((error) => console.log(error));
  }, [quoteAge]);

  return (
    <>
      <Card>
        <Card.Body>
          <Container fluid>
            <Row>
              <Col md="auto" lg="auto">
                <h4 className="d-inline">Submitted Quotes</h4>
              </Col>
              <Col>
                <Form>
                  <Form.Group>
                    <div key="inline-radio">
                      <Form.Check
                        inline
                        label="All"
                        name="quote-age"
                        type="radio"
                        id="all"
                        onChange={() => {
                          setQuoteAge("all");
                        }}
                        defaultChecked
                      />
                      <Form.Check
                        inline
                        label="Past Week"
                        name="quote-age"
                        type="radio"
                        id="week"
                        onChange={() => {
                          setQuoteAge("week");
                        }}
                      />
                      <Form.Check
                        inline
                        label="Past Month"
                        name="quote-age"
                        type="radio"
                        id="month"
                        onChange={() => {
                          setQuoteAge("month");
                        }}
                      />
                      <Form.Check
                        inline
                        label="Past Year"
                        name="quote-age"
                        type="radio"
                        id="year"
                        onChange={() => {
                          setQuoteAge("year");
                        }}
                      />
                    </div>
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          </Container>
          {quoteList
            .slice(0)
            .reverse()
            .slice(quoteNumber - 1, quoteNumber + 2)
            .map((quote, index) => {
              return (
                <Quote
                  key={index}
                  id={quoteNumber + index}
                  name={quote.name}
                  message={quote.message}
                  time={quote.time}
                />
              );
            })}
        </Card.Body>
      </Card>
      <Container fluid className="mb-2">
        <Row>
          <p className="text-center">
            Displaying Quotes #{quoteNumber}-
            {quoteNumber == 0
              ? 0
              : quoteNumber + 2 <= quoteList.length
              ? quoteNumber + 2
              : quoteList.length}{" "}
            out of {quoteList.length}
          </p>
        </Row>
        <Row>
          <Col>
            <div className="d-grid">
              <Button
                onClick={() => {
                  if (quoteNumber >= 4) {
                    setQuoteNumber(quoteNumber - 3);
                  }
                }}
              >
                Previous
              </Button>
            </div>
          </Col>
          <Col>
            <div className="d-grid">
              <Button
                onClick={() => {
                  if (quoteNumber <= quoteList.length - 3) {
                    setQuoteNumber(quoteNumber + 3);
                  }
                }}
              >
                Next
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default DisplayQuotes;
