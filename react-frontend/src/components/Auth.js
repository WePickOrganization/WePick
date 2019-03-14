import React, {Component} from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom'
import { HashRouter as Router, Route, Link, NavLink, Redirect } from 'react-router-dom';

import '../stylesheets/app.css'
import '../stylesheets/index.css'


class Auth extends Component
{
    constructor(props)
    {
      super(props)

       // Define the variables to be stored in our state
      this.state = {
        name:'',
        email: '',
        password: '',
        spotifyUsername: ''
      };
          this.handleSubmit = this.handleSubmit.bind(this); 
          this.handleChange = this.handleChange.bind(this); 
    }

    handleSubmit(event)
    {
        event.preventDefault();
        var self = this;

        // Perform Axios GET Request
        // Sent to Flask server's route '/createUser'\
        // Send our state variables captured by our handleChange function 
        axios.post('/auth', {
              name: this.state.name,
              email: this.state.email,
              password: this.state.password,
              spotifyUsername: this.state.spotifyUsername
          })
          .then(function (response) {
            console.log("Server Response: " + response.status)
            if(response.status==200)
            {
              handleSuccessfulAuth();
            }
            if(response.status==201)
            {
              handleFailedAuth();
            }
            else
            {
              console.log("Server error! Contact the server administrator for details.")
            }
          })
          .catch(function (error) {
          });
    }

    handleChange(event)
    {
        let target = event.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
            [name]: value   
        });
    }

    handleFailedAuth()
    {
      console.log("Authorization failed...")
      this.props.history.push('/Create')
    }

    handleSuccessfulAuth()
    {
      console.log("Successful Authorization!")

      // Log the details
      event.preventDefault();
      console.log(this.state);

      // Perform Axios POST Request
      // Sent to Flask server's route '/createUser'
      // Send our state variables captured by our handleChange function 
      axios.post('/createUser', {
          name: this.state.name,
          email: this.state.email,
          password: this.state.password,
          spotifyUsername: this.state.spotifyUsername
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }

   
    render()
    {
        // Render the forms required for login
        return( 
            <div className="FormCenter">

                <form onSubmit={this.handleSubmit} className="FormFields">

                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="spotifyUsername">Spotify Username</label>
                        <input type="text" id="spotifyUsername" className="FormField__Input" placeholder="Enter your Spotify username" name="spotifyUsername" value={this.state.spotifyUsername} onChange={this.handleChange}></input>
                    </div>

                    <div className="FormField">
                        <button className="FormField__Button mr-20" onSubmit={this.handleSubmit}>Authenticate with Spotify</button>
                    </div>

                </form>
            </div>
            );
   
        }
    }
    
export default withRouter(Auth)



