import React, { Component } from "react";
import BookCover from "./BookCover";
import BookshelfChanger from "./BookshelfChanger";
import BookTitle from "./BookTitle";
import BookAuthors from "./BookAuthors";

class Book extends Component {
  render() {
    const { title, authors, imageLinks } = this.props.book;

    return (
      <div className="book">
        <div className="book-top">
          <BookCover url={imageLinks.smallThumbnail} />
          <BookshelfChanger />
        </div>
        <BookTitle title={title} />
        <BookAuthors authors={authors} />
      </div>
    );
  }
}

export default Book;
