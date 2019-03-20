//The entry point is the outermost component class the React app.
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Link, NavLink, Redirect } from 'react-router-dom';
import { withRouter } from "react-router-dom";

import axios from 'axios'
import RegisterForm from './components/RegisterForm'
import LoginForm from './components/LoginForm'
import ArtistEnter from './components/ArtistEnter'
import NavBar from './components/NavBar'
import Logout from './components/Logout'
import Home from './components/Home'
import StickyFooter from './components/StickyFooter'
import Carousel from './components/Carousel'
import Auth from './components/Auth'
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import './stylesheets/app.css'
import './stylesheets/index.css'
import './stylesheets/styles.css'

class App extends React.Component {
  constructor(props) {
    super(props)

    // Define the variables to be stored in our state
    this.state = {
      name: '',
      email: '',
      password: '',
      spotifyUsername: '',
      password: '',
      isLoggedIn: false
    };

    // Declare these functions here so we can use them outside the constructor
    this.setLoggedIn = this.setLoggedIn.bind(this)
    this.setLoggedOut = this.setLoggedOut.bind(this)
    this.createState = this.createState.bind(this)
    this.createStateWithUsername = this.createStateWithUsername.bind(this)
  }

    // Handle a user logging in by setting some state and passsing in the email from the LoginForm component
  setLoggedIn(emailFromLogin) 
  {
    this.setState({
      isLoggedIn: true,
      email: emailFromLogin
    })

    console.log("Correct details.. Logging in and redirecting to /Create");

    // Depending on the current loggedIn status, redirect the user
    <Route path="/" render={() => (
      loggedIn ? (
        <Redirect to="/auth" />
      ) : (
          <Redirect to="/Login" />
        )
    )} />

    this.forceUpdate();
  }

  // Handle a user logging out by clearing the state and redirecting back to home page
  setLoggedOut() 
  {
    this.setState({
      isLoggedIn: false,
      email:'',
      password:''
    })

    console.log("Logging out....")
    localStorage.clear();

    return <Redirect to="/Home" />
  }

  createState(nameFromRegister, emailFromRegister, passwordFromRegister)
  {
    this.setState({
     name: nameFromRegister,
     email: emailFromRegister,
     password: passwordFromRegister,
    })

    console.log("Adding name, email and password to state.");

  }

  createStateWithUsername(spotifyUsernameFromRegister)
  {
    this.setState({
     spotifyUsername: spotifyUsernameFromRegister,
    })

    console.log("Adding spotify username to state.");

  }


  render() {
    return (
      <Router>

        <div className="App">

          {/* Header bar would go here */}
          {/* Here we pass the current email held in state as props to our NavBar child component*/}
          <div className="NavBar">
            <Route path="/" component={(props) => <NavBar email={this.state.email}>{props.children}</NavBar>}>
            </Route>
          </div>

          <div className="BelowNavBar">

            
          <Route path="/Home" component={Home}>
              </Route>

  

            {/* The blank space to the left of the forms*/}
            

          

            <div className='App__Form'>
              
              <Route path="/Create" component={ArtistEnter}>
              </Route>

              <Route path="/Logout" render={() => (
                  <Logout setLoggedOut={this.setLoggedOut} />
                )} />

              
                {/* Define an exact route for when the components below will be rendered */}
                {/* E.G. When on the path '/', render the RegisterForm found in components/RegisterForm.js */}
                <Route path="/Register" component={(props) => <RegisterForm createState={this.createState}>{props.children}</RegisterForm>}>
                </Route>

                 {/* Define an exact route for when the components below will be rendered */}
                {/* E.G. When on the path '/', render the RegisterForm found in components/RegisterForm.js */}
                <Route path="/Auth" component={(props) => <Auth createStateWithUsername={this.createStateWithUsername}  name={this.state.name} email={this.state.email} password={this.state.password}>{props.children}</Auth>}>
                </Route>

                {/* Define an exact route for when the components below will be rendered */}
                {/* E.G. When on the path '/Login', render the LoginForm found in components/LoginForm.js */}
                <Route path="/Login" render={() => (
                  <LoginForm setLoggedIn={this.setLoggedIn} />
                )} />
              </div>

              
          <div className="StickyFooter">
          <Route path="/" component={StickyFooter}>
            </Route>
          </div>
          </div>







        </div>
      </Router>

    )
  }



}

ReactDOM.render(<App />, document.getElementById('app'));