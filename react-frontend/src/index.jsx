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
        
        // Define the variables to be stored in our state
        this.state = {
          email: '',
          password: ''
        };
        
      }

      render() 
      {
        return (
          <Router>
            <div className="App">
              
               {/* The blank space to the left of the forms*/}
              <div className='App__Aside'></div>

              <div className='App__Form'>

                {/* Header bar would go here */}
                <div className="HEADERBAR">
                  HEADER BAR PLACEHOLDER
                </div>

                {/* Login/Signup text links above the forms */}
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

                <Route path="NavBar" component={NavBar}>
                </Route>
              </div>

            </div>
          </Router>

        )
      }
}
  
ReactDOM.render(<App />, document.getElementById('app'));
