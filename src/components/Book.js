import React, { Component } from 'react'
import BookCover from './BookCover'
import BookshelfChanger from './BookshelfChanger'
import BookTitle from './BookTitle'
import BookAuthors from './BookAuthors'

class Book extends Component
{
    render() {
        return (
            <div className="book">
                <div className="book-top">
                    <BookCover/>
                    <BookshelfChanger/>
                </div>
                <BookTitle/>
                <BookAuthors/>
            </div>
        );
    }
}

export default Book