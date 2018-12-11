import React, { Component } from 'react'
import SearchBooksBar from './SearchBooksBar'
import SearchBooksResult from './SearchBooksResults'
import PropTypes from 'prop-types'

class SearchBooks extends Component {
  static propTypes = {
    shelvedBooks: PropTypes.array.isRequired,
    shelfChangeHandler: PropTypes.func.isRequired
  }

  state = {
    searchQuery: ''
  }

  updateQuery = newQuery => {
    this.setState(previousState => ({
      searchQuery: newQuery.trim()
    }))
  }

  render() {
    const { shelvedBooks, shelfChangeHandler } = this.props

    return (
      <div className="search-books">
        <SearchBooksBar
          searchQuery={this.state.searchQuery}
          updateQueryHandler={this.updateQuery}
        />
        <SearchBooksResult
          searchQuery={this.state.searchQuery}
          shelvedBooks={shelvedBooks}
          shelfChangeHandler={shelfChangeHandler}
        />
      </div>
    )
  }
}

export default SearchBooks
