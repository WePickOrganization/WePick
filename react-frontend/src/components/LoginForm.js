import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

// A LoginForm component that can be exported at the end of the file and can be reused anywhere
class LoginForm extends Component
{
    constructor()
    {
      super()
      
      // Define the variables to be stored in our state
      this.state = {
        email: '',
        password: ''
      };
      
      // This lets us define functions outside of the constructor
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this); 
      this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this); 
    }

    // Function that gets called when values inside a text field are changed and sets them in our state
    handleChange(event) 
    {
        let target = event.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
            [name]: value,        
        });
    }
    
    // Function that gets called when we press our submit button, in this case SignUp/Login
    handleSubmit(event)
    {
        event.preventDefault();
        console.log(this.state);
        var self = this;

        // Perform Axios GET Request
        // Sent to Flask server's route '/createUser'\
        // Send our state variables captured by our handleChange function 
        axios.get('/loginUser', {
            params: {
              email: this.state.email,
              password: this.state.password
            }
          })
          .then(function (response) {
            if(response.status === 200){
                console.log("SUCCESSS");
                console.log(response);
                self.handleSuccessfulLogin();
            }
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    handleSuccessfulLogin()
    {
        this.props.setLoggedIn();
    }

    render()
    {

        // Render the forms required for login
        return(
            <div className="FormCenter">

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
            );
   
        }
    }
    
    export default LoginForm
    