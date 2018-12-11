import React from 'react'
import { Link } from 'react-router-dom'

const SearchBooksBar = ({ searchQuery, updateQueryHandler }) => {
  return (
    <div className="search-books-bar">
      <Link className="close-search" to="/">
        Close
      </Link>
      <div className="search-books-input-wrapper">
        <input
          type="text"
          value={searchQuery}
          onChange={e => updateQueryHandler(e.target.value)}
          placeholder="Search by title or author"
        />
      </div>
    </div>
  )
}

export default SearchBooksBar
