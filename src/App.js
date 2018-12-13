import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBooks from './components/SearchBooks'
import { Route, Link } from 'react-router-dom'
import Bookshelf from './components/Bookshelf'

class BooksApp extends React.Component {
  state = {
    shelvedBooks: []
  }

  componentDidMount() {
    this._fetchShelvedBooks()
  }

  /**
   * Use API to update book shelf
   *
   * @param bookId
   * @param newShelf
   */
  handleShelfChange = (bookId, newShelf) => {
    BooksAPI.update({ id: bookId }, newShelf).then(resp => {
      // after update fetch all shelved books again
      this._fetchShelvedBooks()
    })
  }

  /**
   * Load shelved books from API, set state
   */
  _fetchShelvedBooks = _ => {
    BooksAPI.getAll().then(books => {
      this.setState({ shelvedBooks: books })
    })
  }

  render() {
    return (
      <div className="app">
        {/** Search Page */}
        <Route
          path="/search"
          render={() => (
            <SearchBooks
              shelvedBooks={this.state.shelvedBooks}
              shelfChangeHandler={this.handleShelfChange}
            />
          )}
        />
        {/** Index Page */}
        <Route
          exact
          path="/"
          render={() => (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <Bookshelf
                title="Currently Reading"
                id="currentlyReading"
                shelvedBooks={this.state.shelvedBooks}
                shelfChangeHandler={this.handleShelfChange}
              />
              <Bookshelf
                title="Want to Read"
                id="wantToRead"
                shelvedBooks={this.state.shelvedBooks}
                shelfChangeHandler={this.handleShelfChange}
              />
              <Bookshelf
                title="Read"
                id="read"
                shelvedBooks={this.state.shelvedBooks}
                shelfChangeHandler={this.handleShelfChange}
              />

              <div className="open-search">
                <Link to="/search">Add a book</Link>
              </div>
            </div>
          )}
        />
      </div>
    )
  }
}

export default BooksApp
