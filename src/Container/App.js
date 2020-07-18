import React, { Component, Fragment } from 'react';
import Library from '../Library/Library'


class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
   
  };

 
  
  render() {
    return (
      <Fragment>
        <Library />
      </Fragment>
    );
  }
}

export default App;
