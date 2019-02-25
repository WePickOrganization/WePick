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
      constructor()
      {
        super()
        
        this.state = {

          email: '',
          password: ''
        };
        
      }

      render() 
      {
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
                </Route>
                </div>

          </div>
          </Router>

        )
      }
}
  
ReactDOM.render(<App />, document.getElementById('app'));
