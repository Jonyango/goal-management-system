import React, { useState, useEffect } from "react";
import "./stylesheet/Quotes.css";
import QuoteBox from "./QuoteBox";
import axios from "axios";

const Quotes = () => {
  const config = {
    apiUrl:
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json",
  };
  const [quote, updateQuote] = useState("");
  const [author, updateAuthor] = useState("");

  useEffect(() => {getQuote()}, []);

  function getQuote() {
    axios.get(config.apiUrl).then((res) => {
      let data = res.data.quotes;

      let randomNum = Math.floor(Math.random() * data.length);
      let randomQuote = data[randomNum];

      updateAuthor(randomQuote["author"]);
      updateQuote(randomQuote["quote"]);

    });
  }

  return (
    <div className="main-quote-div">
      <h3 className="quote-title">Daily Motivational Quotes</h3>
      <QuoteBox quote={quote} author={author} />
    </div>
  );
};

export default Quotes;
