import React, { Component } from 'react'

class BookshelfChanger extends Component {
  render() {
    const { currentShelf, shelfChangeHandler, bookId } = this.props

    return (
      <div className="book-shelf-changer">
        <select
          value={currentShelf || 'none'}
          onChange={e => shelfChangeHandler(bookId, e.target.value)}
        >
          <option value="move" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }
}

export default BookshelfChanger
