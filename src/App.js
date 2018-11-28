import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import SearchBooks from "./components/SearchBooks";
import { Route, Link } from "react-router-dom";
import Bookshelf from "./components/Bookshelf";

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      console.log(books);
      this.setState({ books });
    });
  }

  render() {
    return (
      <div className="app">
        {/** Search Page */}
        <Route path="/search" component={SearchBooks} />
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
                  book => book.shelf === "currentlyReading"
                )}
              />
              <Bookshelf
                title="Want to Read"
                books={this.state.books.filter(
                  book => book.shelf === "wantToRead"
                )}
              />
              <Bookshelf
                title="Read"
                books={this.state.books.filter(book => book.shelf === "read")}
              />

              <div className="open-search">
                <Link to="/search">Add a book</Link>
              </div>
            </div>
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
