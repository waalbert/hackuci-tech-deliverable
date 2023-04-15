import "./Quote.css";
import Card from "react-bootstrap/Card";

function Quote({ id, time, message, name }) {
  return (
    <>
      <Card className="mb-2">
        <Card.Header className="card-header quote-color">
          <span>Quote #{id}</span>
          <span>{time}</span>
        </Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>{message}</p>
            <footer className="blockquote-footer">{name}</footer>
          </blockquote>
        </Card.Body>
      </Card>
    </>
  );
}
export default Quote;
