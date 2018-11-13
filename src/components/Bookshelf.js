import React, { Component } from 'react'
import BooksGrid from "./BooksGrid";

class Bookshelf extends Component
{
    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                    <BooksGrid/>
                </div>
            </div>
        );
    }
}

export default Bookshelf