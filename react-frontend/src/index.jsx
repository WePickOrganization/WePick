//import React from "react"
//import ReactDOM from "react-dom"
//The entry point is the outermost component class the React app.
import React from 'react';
import ReactDOM from 'react-dom';

import './stylesheets/app.css'
import './stylesheets/index.css'
import axios from 'axios'

class App extends React.Component {
      constructor(){
        super()
        
        this.state = {
          infos: []
        }

        this.handleClick = this.handleClick.bind(this)
      }

      handleClick()
      {
        console.log('Success!')
        axios.get('http://localhost:5000/showAllUsers')
          .then(response =>
          {
            this.state.infos = response.data;
            console.dir(this.state.infos);
            this.forceUpdate();
          })
      }

      render() {
        return (
          <div className= "App">
              <div className= 'App__Aside'></div>
              
              <div className= 'App__Form'>
                <div className="PageSwitcher">
                    <a href="#" className="PageSwitcher__Item PageSwitcher__Item">Sign In</a>
                    <a href="#" className="PageSwitcher__Item PageSwitcher__Item--Active">Sign Up</a>
                </div>
              </div>

          </div>
        )
      }
}
  
ReactDOM.render(<App />, document.getElementById('app'));
