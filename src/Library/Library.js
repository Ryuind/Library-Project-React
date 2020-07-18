import React, {Component, Fragment} from 'react';
import NewBookButton from './/NewBookButton/NewBookButton'
import Modal from '../Library/Modal/Modal'
import Shelf from '../Library/Shelf/Shelf'


class Library extends Component {
    state = {
        shelfArray: [{
            title: 'Title of The Book',
            author: 'Author of Book',
            pages: '69',
            read: false
        }],
        isModalOpen: false
    }

    toggleModalHandler = () => {
        if(this.state.isModalOpen === false) {
            this.setState({isModalOpen: true})
        } else {
            this.setState({isModalOpen: false})
        }
    }

    changeBookInformationHandler = (title, author, pages, read) =>{
        this.state.shelfArray.push(
            {
                title: title,
                author: author,
                pages: pages,
                read: read
            }
        )
            this.toggleModalHandler();
    }

    deleteBookHandler = (index) =>{
        const shelfArray =  [...this.state.shelfArray]
        shelfArray.splice(index, 1)
        this.setState({
            shelfArray: shelfArray
        }) 

    }

    toggleReadHandler = (index) => {
        const shelfArray = [...this.state.shelfArray];
        shelfArray[index]= {
            title: shelfArray[index].title,
            author: shelfArray[index].author,
            pages: shelfArray[index].pages,
            read: !shelfArray[index].read
        }
        this.setState({
            shelfArray: shelfArray
        })
    }

    render () {
        return (
            <Fragment>
                    <NewBookButton clicked={this.toggleModalHandler}/>
                    <Shelf shelfArray={this.state.shelfArray}
                            bookDelete={this.deleteBookHandler}
                            toggleRead={this.toggleReadHandler}
                    />
                    <Modal 
                    changeBookClicked={this.changeBookInformationHandler}
                    backdropClicked={this.toggleModalHandler} 
                    showBackdrop={this.state.isModalOpen}
                    />
                    
            </Fragment>
        )
    }
}


export default Library