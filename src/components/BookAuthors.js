import React from 'react'

const BookAuthors = ({ authors }) => {
  return <div className="book-authors">{authors && authors.join(', ')}</div>
}

export default BookAuthors
