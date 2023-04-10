import React from "react";
import BooksSummary from "./BooksSummary";
import AvailableBooks from "./AvailableBooks";

const Books = (props) => {
  return (
    <React.Fragment>
      <BooksSummary></BooksSummary>
      <AvailableBooks></AvailableBooks>
    </React.Fragment>
  );
};

export default Books;
