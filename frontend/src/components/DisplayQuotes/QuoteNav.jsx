import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function QuoteNav({ quoteNumber, setQuoteNumber, quotes }) {
  return (
    <Container fluid className="mb-3">
      <Row>
        <p className="text-center">
          {quotes.length == 0 && "No Quotes Displayed"}
          {quotes.length != 0 && (
            <>
              {quoteNumber == quotes.length && (
                <>
                  Displaying Quotes #{quoteNumber} out of {quotes.length}
                </>
              )}
              {quoteNumber != quotes.length && (
                <>
                  Displaying Quotes #{quotes.length == 0 ? 0 : quoteNumber}-
                  {quoteNumber + 2 <= quotes.length
                    ? quoteNumber + 2
                    : quotes.length}{" "}
                  out of {quotes.length}
                </>
              )}
            </>
          )}
        </p>
      </Row>
      <Row>
        <Col>
          <div className="d-grid">
            <Button
              className="btn-color"
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
              className="btn-color"
              onClick={() => {
                if (quoteNumber <= quotes.length - 3) {
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
  );
}

export default QuoteNav;
