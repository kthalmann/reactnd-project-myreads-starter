import React from 'react'
import BooksGrid from './BooksGrid'

const Bookshelf = ({ title, id, shelvedBooks, shelfChangeHandler }) => {
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

export default Bookshelf
