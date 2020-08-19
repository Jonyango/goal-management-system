import React from "react";
import "./stylesheet/Quotes.css";

const QuoteBox = ({ quote, author }) => {
  return (
    <React.Fragment>
      <div className="quotes">
        <h3 className="quote-message">
          {" "}
         {quote}
        </h3>
      </div>
      <div id="author">
  <p>{author}</p>
      </div>
    </React.Fragment>
  );
};

export default QuoteBox;
