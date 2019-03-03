//The entry point is the outermost component class the React app.
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Link, NavLink, Redirect } from 'react-router-dom';
import { withRouter } from "react-router-dom";
import './stylesheets/app.css'
import './stylesheets/index.css'
import axios from 'axios'
import RegisterForm from './components/RegisterForm'
import LoginForm from './components/LoginForm'
import ArtistEnter from './components/ArtistEnter'
import NavBar from './components/NavBar'
import Logout from './components/Logout'

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

class App extends React.Component {
  constructor(props) {
    super(props)

    // Define the variables to be stored in our state
    this.state = {
      email: '',
      password: '',
      isLoggedIn: false
    };

    this.setLoggedIn = this.setLoggedIn.bind(this)
    this.setLoggedOut = this.setLoggedOut.bind(this)
  }

  setLoggedIn(email) {

    this.setState({
      isLoggedIn: true,
      email: email
    })
    console.log("Correct details.. Logging in and redirecting to /Create");
    <Route path="/" render={() => (
      loggedIn ? (
        <Redirect to="/Create" />
      ) : (
          <Redirect to="/Login" />
        )
    )} />

    this.forceUpdate();
  }

  setLoggedOut() {
    this.setState({
      isLoggedIn: false,
      email:'',
      password:''
    })
    console.log("Logging out....")
    return <Redirect to="/Login" />
  }


  render() {
    return (
      <Router>

        <div className="App">

          {/* Header bar would go here */}
          <div className="NavBar">
            <Route path="/" component={(props) => <NavBar email={this.state.email}>{props.children}</NavBar>}>
            </Route>
          </div>

          <div className="BelowNavBar">

           
            {/* The blank space to the left of the forms*/}
            <div className='App__Aside'>

            </div>



            <div className='App__Form'>

            <Route path="/Logout" render={() => (
                <Logout setLoggedOut={this.setLoggedOut} />
              )} />

              <Route path="/Create" component={ArtistEnter}>
              </Route>


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
              <Route path="/Login" render={() => (
                <LoginForm setLoggedIn={this.setLoggedIn} />
              )} />
            </div>
          </div>







        </div>
      </Router>

    )
  }



}

ReactDOM.render(<App />, document.getElementById('app'));
