import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function QuoteAgeSelect({ setQuoteAge }) {
  return (
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
  );
}

export default QuoteAgeSelect;
