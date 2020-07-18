import React from 'react';
import classes from '../NewBookButton/NewBookButton.module.css';

const newBookButton = (props) => {
  return (
      <div className={classes.ButtonContainer}>
        <button onClick={props.clicked} className={classes.NewBookButton}>New Book</button>
      </div>
  )  
};

export default newBookButton
