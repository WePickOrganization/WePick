//import React from "react"
//import ReactDOM from "react-dom"
//The entry point is the outermost component class the React app.
import React from 'react';
import ReactDOM from 'react-dom';

import './app.css'

class App extends React.Component {
      constructor(){
        super()

        this.handleClick = this.handleClick.bind(bind)
      }

      handleClick(){
        console.log('Success!')
      }

      render() {
        return (
          <div class= 'button__container'>  
          <button class='button'>Click Me</button>
          </div>
        );
      }
}
  
ReactDOM.render(<App />, document.getElementById('app'));
