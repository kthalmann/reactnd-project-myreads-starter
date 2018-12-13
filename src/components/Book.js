import React, { Component } from 'react'
import BookCover from './BookCover'
import BookshelfChanger from './BookshelfChanger'
import BookTitle from './BookTitle'
import BookAuthors from './BookAuthors'
import PropTypes from 'prop-types'

class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    shelfChangeHandler: PropTypes.func.isRequired
  }

  render() {
    const { id, title, authors, imageLinks, shelf } = this.props.book

    return (
      <div className="book">
        <div className="book-top">
          <BookCover
            url={
              imageLinks
                ? imageLinks.smallThumbnail
                : 'https://dummyimage.com/128x193/7d7d7d/ffffff.gif&text=No+Image'
            }
          />
          <BookshelfChanger
            bookId={id}
            currentShelf={shelf}
            shelfChangeHandler={this.props.shelfChangeHandler}
          />
        </div>
        <BookTitle title={title} />
        <BookAuthors authors={authors} />
      </div>
    )
  }
}

export default Book
