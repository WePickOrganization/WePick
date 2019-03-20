import React, {Component} from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom'
import { HashRouter as Router, Route, Link, NavLink, Redirect } from 'react-router-dom';

import '../stylesheets/app.css'
import '../stylesheets/index.css'

const withErrorHandling = WrappedComponent => ({ showError, children }) => {
    return (
      <WrappedComponent>
        {showError && <div className="error-message">Your login details are incorrect.</div>}
        {children}
      </WrappedComponent>
    );
  };

const DivWithErrorHandling = withErrorHandling(({children}) => <div>{children}</div>)

// A LoginForm component that can be exported at the end of the file and can be reused anywhere
class LoginForm extends Component
{
    constructor(props)
    {
      super(props)
      
      // Define the variables to be stored in our state
      this.state = {
        email: '',
        password: '',
        redirect: false,
        showError: false,
      };
      
      // This lets us define functions outside of the constructor
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this); 
      this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this); 
      this.handleFailedLogin = this.handleFailedLogin.bind(this); 
    }

    // Function that gets called when values inside a text field are changed and sets them in our state
    handleChange(event) 
    {
        let target = event.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
            [name]: value   
        });
    }
    
    // Function that gets called when we press our submit button, in this case SignUp/Login
    handleSubmit(event)
    {
        event.preventDefault();
        console.log(this.state);
        var self = this;
        //this.setState({ redirect: true });

        // Perform Axios GET Request
        // Sent to Flask server's route '/createUser'\
        // Send our state variables captured by our handleChange function 
        axios.post('/loginUser', {
            params: {
              email: this.state.email,
              password: this.state.password
            }
          })
          .then(function (response) {
            console.log("Server Response: " + response.status)
            if(response.status==200)
            {
              console.log("Successful Login!")
              self.handleSuccessfulLogin();
            }
            if(response.status==201)
            {
              console.log("Wrong login details!")
              self.toggleError();
              self.handleFailedLogin();
            }
            else
            {
              console.log("Server error! Contact the server administrator for details.")
            }
          })
          .catch(function (error) {
            self.handleFailedLogin();
          });
    }

    handleSuccessfulLogin()
    {
        this.props.setLoggedIn(this.state.email);
        this.props.history.push('/Home');
    }

    handleFailedLogin()
    {
        this.props.setLoggedOut();
        this.toggleError();
    }
      
    toggleError = () => {
        this.setState((prevState, props) => {
          return { showError: !prevState.showError }
        })
      };
    
    render()
    {

       

        // Render the forms required for login
        return(
            <DivWithErrorHandling showError={this.state.showError}>
            
            
            <div className="FormCenter">

            {/* Login/Signup text links above the forms */}
            <div className="FormTitle">
                    <NavLink to="/Login"
                    activeClassName="FormTitle__Link--Active"
                    className="FormTitle__Link">Sign In</NavLink> or

                    <NavLink to="/Register"
                    activeClassName="FormTitle__Link--Active"
                    className="FormTitle__Link">Sign Up</NavLink>
             </div>
                

                <form onSubmit={this.handleSubmit} className="FormFields">

                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="email">Email</label>
                        <input type="email" id="email" className="FormField__Input" placeholder="Enter your email address" name="email" value={this.state.email} onChange={this.handleChange}></input>
                    </div>

                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="password">Password</label>
                        <input type="Password" id="Password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange}></input>
                    </div>

                    <div className="FormField">
                        <button className="FormField__Button mr-20">Sign In</button> <Link to="/"
                            className="FormField__Link">Create an account</Link>
                    </div>

                </form>
            </div>
            </DivWithErrorHandling>

            );
   
        }
    }
    
    export default withRouter(LoginForm)
    