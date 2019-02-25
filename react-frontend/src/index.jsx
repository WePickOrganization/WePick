//import React from "react"
//import ReactDOM from "react-dom"
//The entry point is the outermost component class the React app.
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';

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
          <Router>
          <div className= "App">
              <div className= 'App__Aside'></div>
              
              <div className= 'App__Form'>
                <div className="PageSwitcher">
                    <a href="#" className="PageSwitcher__Item PageSwitcher__Item">Sign In</a>
                    <a href="#" className="PageSwitcher__Item PageSwitcher__Item--Active">Sign Up</a>
                </div>

                <div className="FormTitle">
                  <a href="#" className="FormTitle__Link">Sign In</a> or <a href="#"
                     className="FormTitle__Link FormTitle__Link--Active">Sign Up</a>
                </div>

                <div className="FormCenter">
                  <form className="FormFields" onSubmit={this.handleSubmit}>
                        <div className="FormField">
                        <label className="FormField__Label" htmlFor="name">Full Name</label>
                        <input type="text" id="name" className="FormField__Input" placeholder="Enter your full name" name="name"></input>
                        </div>
                        
                        <div className="FormField">
                        <label className="FormField__Label" htmlFor="email">Email</label>
                        <input type="email" id="email" className="FormField__Input" placeholder="Enter your email address" name="email"></input>
                        </div>

                        <div className="FormField">
                        <label className="FormField__Label" htmlFor="password">Password</label>
                        <input type="Password" id="Password" className="FormField__Input" placeholder="Enter your password" name="password"></input>
                        </div>

                        <div className="FormField">
                        <label className="FormField__CheckboxLabel">
                            <input className="FormField__Checkbox" type="checkbox" name="hasAgreed"/> I agree all statements in <a href="" className="FormField__TermsLink">terms of service</a>
                        </label>
                        </div>
                  
                        <div className="FormField">
                          <button className="FormField__Button mr-20">Sign Up</button> <a href="#"
                          className="FormField__Link">I'm already member</a>
                        </div>
                  </form>
                </div>
              </div>

          </div>
          </Router>

        )
      }
}
  
ReactDOM.render(<App />, document.getElementById('app'));
