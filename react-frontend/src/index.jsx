//import React from "react"
//import ReactDOM from "react-dom"
//The entry point is the outermost component class the React app.
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';

import './stylesheets/app.css'
import './stylesheets/index.css'
import axios from 'axios'
import RegisterForm from './components/RegisterForm'
import LoginForm from './components/LoginForm'

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
          <Router>
          <div className= "App">
              <div className= 'App__Aside'></div>
              
              <div className= 'App__Form'>
                <div className="PageSwitcher">
                    <a href="#" className="PageSwitcher__Item PageSwitcher__Item">Sign In</a>
                    <a href="#" className="PageSwitcher__Item PageSwitcher__Item--Active">Sign Up</a>
                </div>

                <div className="FormTitle">
                  <NavLink to="/Login"

                     activeClassName="FormTitle__Link--Active"
                     className="FormTitle__Link">Sign In</NavLink> or <NavLink exact to="/"
                    
                     activeClassName="FormTitle__Link--Active" 
                     className="FormTitle__Link">Sign Up</NavLink>
                </div>

                {/* Define an exact route for when the components below will be rendered */}
                {/* E.G. When on the path '/', render the RegisterForm found in components/RegisterForm.js */}
                <Route exact path="/" component={RegisterForm}>
                </Route>

                {/* Define an exact route for when the components below will be rendered */}
                {/* E.G. When on the path '/Login', render the LoginForm found in components/LoginForm.js */}
                <Route path="/Login" component={LoginForm}>
                  <h1>Sign In!</h1>
                </Route>
                </div>

          </div>
          </Router>

        )
      }
}
  
ReactDOM.render(<App />, document.getElementById('app'));
