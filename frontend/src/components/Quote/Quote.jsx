import "./Quote.css";
import Card from "react-bootstrap/Card";

function Quote(props) {
  return (
    <>
      <Card className="mb-2">
        <Card.Header className="card-header">
          <span>Quote #{props.id}</span>
          <span>Submitted on {props.time}</span>
        </Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>{props.message}</p>
            <footer className="blockquote-footer">{props.name}</footer>
          </blockquote>
        </Card.Body>
      </Card>
    </>
  );
}
export default Quote;
