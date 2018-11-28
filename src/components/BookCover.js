import React from "react";

const BookCover = ({ url }) => {
  return (
    <div
      className="book-cover"
      style={{ width: 128, height: 193, backgroundImage: "url(" + url + ")" }}
    />
  );
};

export default BookCover;
