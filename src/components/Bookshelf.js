import React, { Component } from 'react'
import BooksGrid from './BooksGrid'

class Bookshelf extends Component {
  render() {
    const { title, id, shelvedBooks, shelfChangeHandler } = this.props

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <BooksGrid
            books={shelvedBooks.filter(book => book.shelf === id)}
            shelfChangeHandler={shelfChangeHandler}
          />
        </div>
      </div>
    )
  }
}

export default Bookshelf
