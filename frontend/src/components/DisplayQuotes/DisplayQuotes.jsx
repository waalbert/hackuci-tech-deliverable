import { useState, useEffect } from "react";
import Quote from "./Quote/Quote";
import Card from "react-bootstrap/Card";
import axios from "axios";
import QuoteAgeSelect from "./QuoteAgeSelect";
import QuoteNav from "./QuoteNav";

const URL = "http://127.0.0.1:8000";

function DisplayQuotes({ setQuoteList, quotes }) {
  const [quoteNumber, setQuoteNumber] = useState(1);
  const [quoteAge, setQuoteAge] = useState("all");

  useEffect(() => {
    axios
      .get(`${URL}/?age=${quoteAge}`)
      .then((response) => {
        const quotes = response["data"]["data"];
        if (quotes.length == 0) {
          setQuoteNumber(0);
        } else {
          setQuoteNumber(1);
        }
        setQuoteList(quotes);
      })
      .catch((error) => console.log(error));
  }, [quoteAge]);

  return (
    <Card className="mb-2 rounded-corners">
      <Card.Body>
        <QuoteNav
          quoteNumber={quoteNumber}
          setQuoteNumber={setQuoteNumber}
          quotes={quotes}
        />
        <QuoteAgeSelect setQuoteAge={setQuoteAge}></QuoteAgeSelect>
        {quotes
          .slice(0)
          .reverse()
          .slice(quoteNumber - 1, quoteNumber + 2)
          .map((quote, index) => {
            const cleanTime = quote.time.replace("T", " ");
            return (
              <Quote
                key={index}
                id={quoteNumber + index}
                name={quote.name}
                message={quote.message}
                time={cleanTime}
              />
            );
          })}
      </Card.Body>
    </Card>
  );
}

export default DisplayQuotes;
