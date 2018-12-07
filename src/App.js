import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBooks from './components/SearchBooks'
import { Route, Link } from 'react-router-dom'
import Bookshelf from './components/Bookshelf'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      console.log(books)
      this.setState({ books })
    })
  }

  handleShelfChange = (bookId, newShelf) => {
    this.setState(previousState => ({
      books: previousState.books.map(book => {
        if (book.id === bookId) {
          // set new shelf
          book.shelf = newShelf
        }
        return book
      })
    }))

    // use API to update book shelf
    BooksAPI.update({ id: bookId }, newShelf).then(resp => {
      console.log(resp)
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
              books={this.state.books}
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
                books={this.state.books.filter(
                  book => book.shelf === 'currentlyReading'
                )}
                shelfChangeHandler={this.handleShelfChange}
              />
              <Bookshelf
                title="Want to Read"
                books={this.state.books.filter(
                  book => book.shelf === 'wantToRead'
                )}
                shelfChangeHandler={this.handleShelfChange}
              />
              <Bookshelf
                title="Read"
                books={this.state.books.filter(book => book.shelf === 'read')}
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
