import React, { Component } from 'react'
import BooksGrid from './BooksGrid'
import * as BooksAPI from '../BooksAPI'

class SearchBooksResult extends Component {
  state = {
    bookResults: null
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps')
    // Store prevId in state so we can compare when props change.
    // Clear out previously-loaded data (so we don't render stale stuff).
    if (props.searchQuery !== state.prevSearchQuery) {
      return {
        bookResults: null,
        prevSearchQuery: props.searchQuery
      }
    }

    // No state update necessary
    return null
  }

  componentDidMount() {
    this._loadSearchResults(this.props.searchQuery)
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.bookResults === null) {
      this._loadSearchResults(this.props.searchQuery)
    }
  }

  componentWillUnmount() {
    if (this._asyncRequest) {
      this._asyncRequest.cancel()
    }
  }

  _loadSearchResults = searchQuery => {
    if (searchQuery === '') return []

    this._asyncRequest = BooksAPI.search(searchQuery).then(searchResult => {
      console.log(searchResult)
      this._asyncRequest = null

      if (searchResult.error) {
        searchResult = []
      }
      this.setState(previousState => ({
        bookResults: searchResult
      }))
    })
  }

  render() {
    const { searchQuery, shelfChangeHandler } = this.props

    if (this.state.bookResults === null) {
      return (
        <div className="search-books-results">
          <div style={{ textAlign: 'center' }}>
            {searchQuery !== ''
              ? 'Loading'
              : 'Nothing to display. Enter search query'}
          </div>
        </div>
      )
    } else {
      return (
        <div className="search-books-results">
          {this.state.bookResults.length > 0 ? (
            <BooksGrid
              books={this.state.bookResults}
              shelfChangeHandler={shelfChangeHandler}
            />
          ) : (
            <div style={{ textAlign: 'center' }}>No Results for this query</div>
          )}
        </div>
      )
    }
  }
}

export default SearchBooksResult
