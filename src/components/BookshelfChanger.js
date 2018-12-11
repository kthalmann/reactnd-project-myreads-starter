import React, { Component } from 'react'

class BookshelfChanger extends Component {
  state = {
    currentShelf: this.props.currentShelf || 'none'
  }

  onChange = newShelf => {
    const { shelfChangeHandler, bookId } = this.props

    shelfChangeHandler(bookId, newShelf)

    this.setState(previousState => ({
      currentShelf: newShelf
    }))
  }

  render() {
    return (
      <div className="book-shelf-changer">
        <select
          value={this.state.currentShelf}
          onChange={e => this.onChange(e.target.value)}
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
