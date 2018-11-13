import React, { Component } from 'react'
import SearchBooksBar from "./SearchBooksBar";
import SearchBooksResult from "./SearchBooksResults";

class SearchBooks extends Component
{
    state = {
        searchInput: ''
    }

    render() {
        return (
            <div className="search-books">
                <SearchBooksBar/>
                <SearchBooksResult/>
            </div>
        );
    }
}

export default SearchBooks