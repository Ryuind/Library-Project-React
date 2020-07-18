import React from 'react';
import classes from '../Book/Book.module.css';

const book = (props) => {
    let bookReadStyle = 'red'
    if(props.bookRead) {
        bookReadStyle = 'green'
    }
    let bookPagesShown = props.bookPages
    if(props.bookPages >= 9999) {
        bookPagesShown = 9999
    }
    if(props.bookPages === undefined) {
        bookPagesShown = 0
    }

 return (
     <div className={classes.Book}>
         <div className={classes.TitleDiv}>
        <p className={classes.BookTitle}><strong>{props.bookTitle}</strong></p>
        
        <p className={classes.BookAuthor}>{props.bookAuthor}</p>
        </div>
        <div onClick={() => {props.bookToggleRead(props.bookIndex)}} className={classes.BookRead}  style={{
            backgroundColor: bookReadStyle
        }}><p className={classes.Pages}>{bookPagesShown}</p></div><br />
        <button className={classes.DeleteBtn} onClick={() => {props.bookDelete(props.bookIndex)}}>Delete</button> 
     </div>
 )
}

export default book