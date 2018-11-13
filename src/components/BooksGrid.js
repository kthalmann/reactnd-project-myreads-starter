import React from "react";
import Book from "./Book";

const BooksGrid = props => {
    return (
        <ol className="books-grid">
            {/*{props.books.forEach(book => (*/}
                <li>
                    <Book/>
                </li>
            {/*))}*/}
        </ol>
    )
}

export default BooksGrid