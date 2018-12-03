import React from 'react'
import Book from './Book'

const BooksGrid = ({ books, shelfChangeHandler }) => {
  return (
    <ol className="books-grid">
      {books.map(book => (
        <li key={book.id}>
          <Book book={book} shelfChangeHandler={shelfChangeHandler} />
        </li>
      ))}
    </ol>
  )
}

export default BooksGrid
