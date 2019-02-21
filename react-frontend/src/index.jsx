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
          infos: []
        }

        this.handleClick = this.handleClick.bind(this)
      }

      handleClick(){
        console.log('Success!')
        axios.get('http://localhost:5000/showAllUsers')
          .then(response =>{this.state.infos = response.data;console.dir(this.state.infos);this.forceUpdate();})
      }

      render() {
        return (
          <div className= 'button__container'>  
          <button className='button' onClick={this.handleClick}>
            Click Me
          </button>
          <ul>
          {this.state.infos.map(infos => <li>{infos.name}</li>)}
          </ul>
          </div>
        )
      }
}
  
ReactDOM.render(<App />, document.getElementById('app'));
