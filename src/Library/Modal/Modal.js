import React, {Fragment} from 'react';
import classes from '../Modal/Modal.module.css'
import Backdrop from '../Backdrop/Backdrop'

const modal = (props) => {
    let modalOrNot = null;
    let titleInput, authorInput, pagesInput, readInput;
    if(props.showBackdrop) {
        modalOrNot = (
            <div className={classes.Modal}>
                <p>What is the title of this book?</p>
                <input  onChange={event => titleInput = event.target.value} type='text'
                required 
                maxLength='40'
                />
                <p>Who is the Author of this book?</p>
                <input onChange={event => authorInput = event.target.value} type='text' 
                required 
                maxLength='40'
                />
                <p>How many pages is this book?</p>
                <input onChange={event => pagesInput = event.target.value} type='number' 
                required 
                max='9999'
                min='1' 
                />
                <p>Have you read this book?</p>
                <input className={classes.Checkbox} type='checkbox' onChange={event => event.target.checked ? readInput = true : readInput = false}  />
                <br />
                <button className={classes.Submit} onClick={ (event) =>{ 
                    if(titleInput && authorInput){
                    props.changeBookClicked(titleInput, authorInput, pagesInput, readInput)
                    } else {
                       titleInput ?  event.target.parentElement.children[0].style.backgroundImage = 'none' : event.target.parentElement.children[0].style.backgroundImage = 'linear-gradient(to right, rgb(240, 51, 51), rgb(238, 102, 125))'
                       authorInput ?  event.target.parentElement.children[2].style.backgroundImage = 'none' : event.target.parentElement.children[2].style.backgroundImage = 'linear-gradient(to right, rgb(240, 51, 51), rgb(238, 102, 125))'
                    }
                }} >Submit</button>
            </div>
        )
    } else {
        modalOrNot = null;
    }

    return (
        <Fragment>
            <Backdrop showBackdrop={props.showBackdrop} clicked={props.backdropClicked}/>
            {modalOrNot}
        </Fragment>
        
    )
}

export default modal