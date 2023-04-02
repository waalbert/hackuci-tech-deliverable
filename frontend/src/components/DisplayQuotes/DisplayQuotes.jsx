import { useState } from "react";
import Quote from "../Quote/Quote";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function DisplayQuotes() {
  const [quoteNumber, setQuoteNumber] = useState(1);

  //   const changePage = () => {};
  let quoteList = [
    {
      name: "Peter Anteater",
      message: "Zot Zot Zot!",
      time: "1965-11-30T13:52:09",
    },
    {
      name: "rieko",
      message: "Drink more water",
      time: "2021-02-21T22:34:59",
    },
    {
      name: "t\u00e6",
      message: "slay, girlboss",
      time: "2022-11-03T20:23:54",
    },
    {
      name: "pham",
      message: "i'm a resident gaslighter",
      time: "2023-01-25T17:58:31",
    },
    {
      name: "randy",
      message: "I love technology",
      time: "2023-02-15T16:46:22",
    },
    {
      name: "Jane Doe",
      message:
        "This quote is quite a bit longer than the other ones just to make things interesting. This shouldn't be too difficult to handle, but your design should be able to adapt to all sorts of edge cases. Will your application be able to handle this properly? Or will the text spill over atrociously or even get cut off? Also, how are you doing? I hope you're doing well. Have a Hack at UCI day!",
      time: "2023-03-02T11:48:17",
    },
    {
      name: "Josh Smith",
      message: "Testing testing, is this thing on?",
      time: "2023-03-02T11:51:06",
    },
    {
      name: "wiley",
      message: "you're very tall but you're very down to earth",
      time: "2023-03-02T20:35:16",
    },
    {
      name: "Ru",
      message: "no, don't slay me",
      time: "2023-03-03T20:06:23",
    },
    {
      name: "boo",
      message: "moo",
      time: "2023-03-06T14:13:55",
    },
  ];

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
                        id="inline-radio-1"
                      />
                      <Form.Check
                        inline
                        label="Past Week"
                        name="quote-age"
                        type="radio"
                        id="inline-radio-2"
                      />
                      <Form.Check
                        inline
                        label="Past Month"
                        name="quote-age"
                        type="radio"
                        id="inline-radio-3"
                      />
                      <Form.Check
                        inline
                        label="Past Year"
                        name="quote-age"
                        type="radio"
                        id="inline-radio-4"
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
      <p>
        Displaying Quotes #{quoteNumber}-{quoteNumber + 2}
      </p>
      <Button
        onClick={() => {
          if (quoteNumber >= 4) {
            setQuoteNumber(quoteNumber - 3);
          }
        }}
      >
        Previous
      </Button>
      <Button
        onClick={() => {
          if (quoteNumber <= quoteList.length - 3) {
            setQuoteNumber(quoteNumber + 3);
          }
        }}
      >
        Next
      </Button>
    </>
  );
}

export default DisplayQuotes;
