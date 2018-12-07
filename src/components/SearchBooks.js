import React, { Component } from 'react'
import SearchBooksBar from './SearchBooksBar'
import SearchBooksResult from './SearchBooksResults'
import * as BooksAPI from '../BooksAPI'

class SearchBooks extends Component {
  state = {
    searchQuery: ''
  }

  updateQuery = newQuery => {
    this.setState(previousState => ({
      searchQuery: newQuery.trim()
    }))
  }

  render() {
    const { books, shelfChangeHandler } = this.props

    return (
      <div className="search-books">
        <SearchBooksBar
          searchQuery={this.state.searchQuery}
          updateQueryHandler={this.updateQuery}
        />
        <SearchBooksResult
          searchQuery={this.state.searchQuery}
          shelfChangeHandler={shelfChangeHandler}
        />
      </div>
    )
  }
}

export default SearchBooks
