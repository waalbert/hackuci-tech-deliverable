import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

const URL = "http://127.0.0.1:8000";

function SubmitQuotes({ setQuoteList }) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const clearForm = () => {
    setName("");
    setMessage("");
    // console.log(name);
    // console.log(message);
  };

  return (
    <>
      <h2 className="submit-quote">Submit a quote</h2>
      {/* TODO: implement custom form submission logic to not refresh the page */}
      {/* <form action="/api/quote" method="post" className="submit-quote"> */}
      {/* <label htmlFor="input-name">Name</label>
        <input type="text" name="name" id="input-name" required />
        <label htmlFor="input-message">Quote</label>
        <input type="text" name="message" id="input-message" required /> */}
      {/* </form> */}
      <div>
        <Form>
          <Form.Group>
            <Form.Label htmlFor="input-name">Enter your name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              id="input-name"
              value={name}
              onChange={(e) => {
                // console.log(e.target.value);
                setName(e.target.value);
              }}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="input-message">Enter your quote</Form.Label>
            <Form.Control
              type="text"
              name="message"
              id="input-message"
              value={message}
              onChange={(e) => {
                // console.log(e.target.value);
                setMessage(e.target.value);
              }}
              required
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            onClick={(e) => {
              // setName("");
              // setMessage("");
              // console.log(e.target.value);
              e.preventDefault();
              console.log(name);
              console.log(message);
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
                })
                .catch((error) => {
                  if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                  } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    console.log(error.request);
                  } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log("Error", error.message);
                  }
                  // console.log(error.config);
                  console.log(error.toJSON());
                });
            }}
          >
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}

export default SubmitQuotes;
