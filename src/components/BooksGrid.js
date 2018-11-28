import React from "react";
import Book from "./Book";

const BooksGrid = ({ books }) => {
  return (
    <ol className="books-grid">
      {books.map(book => (
        <li key={book.id}>
          <Book book={book} />
        </li>
      ))}
    </ol>
  );
};

export default BooksGrid;
