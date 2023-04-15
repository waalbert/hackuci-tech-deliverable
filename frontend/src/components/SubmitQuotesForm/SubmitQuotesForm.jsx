import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";
import "./SubmitQuotesForm.css";

const URL = "http://127.0.0.1:8000";

function SubmitQuotesForm({ setQuoteList }) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [validated, setValidated] = useState(false);

  const clearForm = () => {
    setName("");
    setMessage("");
  };

  const handleSubmit = (e) => {
    if (e.currentTarget.checkValidity() == false) {
      e.preventDefault();
      console.log("invalid");
      e.stopPropagation();
      setValidated(true);
    } else {
      e.preventDefault();
      axios
        .post(
          `${URL}/quote`,
          {
            name: name,
            message: message,
          },
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        )
        .then((response) => {
          setQuoteList(response["data"]["data"]);
          clearForm();
          setValidated(false);
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <Card className="submit-quote-card rounded-corners">
      <h3 style={{ marginTop: "8px" }} className="h3 text-center">
        Submit a quote
      </h3>
      {/* DONE - TODO: implement custom form submission logic to not refresh the page */}
      <Card.Body>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="input-name">Enter your name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              id="input-name"
              placeholder="Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please Enter Your Name!
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="input-message">Enter your quote</Form.Label>
            <Form.Control
              type="text"
              name="message"
              id="input-message"
              placeholder="Tell the world your quote!"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please Enter a Quote!
            </Form.Control.Feedback>
          </Form.Group>
          <div className="text-center mt-3">
            <Button variant="primary" type="submit" className="btn-color">
              Submit
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default SubmitQuotesForm;
