//import React from "react"
//import ReactDOM from "react-dom"
//The entry point is the outermost component class the React app.
import React from 'react';
import ReactDOM from 'react-dom';

import './app.css'
import axios from 'axios'

class App extends React.Component {
      constructor(){
        super()
        this.state = {
          username: ''
        }

        this.handleClick = this.handleClick.bind(this)
      }

      handleClick(){
        console.log('Success!')
      }

      render() {
        return (
          <div className= 'button__container'>  
          <button className='button' onClick={this.handleClick}>
            Click Me
          </button>
          </div>
        )
      }
}
  
ReactDOM.render(<App />, document.getElementById('app'));
