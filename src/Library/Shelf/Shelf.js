import React from 'react';
import classes from '../Shelf/Shelf.module.css'
import Book from '../Shelf/Book/Book'

const shelf = (props) => {
    return (
        <div className={classes.Shelf}>
            {props.shelfArray.map( (book, index) =>{
                return (<Book 
                        key={index}
                        bookTitle={book.title}
                        bookAuthor={book.author}
                        bookPages={book.pages}
                        bookRead={book.read}
                        bookIndex={index}
                        bookDelete={props.bookDelete}
                        bookToggleRead={props.toggleRead}
                    />)
            })}
        </div>
    )
}

export default shelf