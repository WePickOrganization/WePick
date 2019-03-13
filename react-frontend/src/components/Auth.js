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
            spoptifyUsername: '',
          };

          this.handleSubmit = this.handleSubmit.bind(this); 


    }

    handleSubmit(event)
    {
        event.preventDefault();
        var self = this;
        //this.setState({ redirect: true });

        // Perform Axios GET Request
        // Sent to Flask server's route '/createUser'\
        // Send our state variables captured by our handleChange function 
        axios.post('/auth', {
            params: {
              spoptifyUsername: this.state.spoptifyUsername,
            }
          })
          .then(function (response) {
            console.log("Server Response: " + response.status)
            if(response.status==200)
            {
              console.log("Successful Authorization!")
            }
            if(response.status==201)
            {
              console.log("Wrong login details!")
              self.toggleError();
            }
            else
            {
              console.log("Server error! Contact the server administrator for details.")
            }
          })
          .catch(function (error) {
          });
    }

    handleFailedAuth()
    {
    }

    handleSuccessfulAuth()
    {
    }

   
    render()
    {
        // Render the forms required for login
        return(
           
            
            <div className="FormCenter">

                <form onSubmit={this.handleSubmit} className="FormFields">

                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="spotifyUsername">Spotify Username</label>
                        <input type="text" id="spotifyUsername" className="FormField__Input" placeholder="Enter your Spotify username" name="spotifyUsername" value={this.state.spotifyUsername}></input>
                    </div>

                    <div className="FormField">
                        <button className="FormField__Button mr-20">Authenticate with Spotify</button>
                    </div>

                </form>
            </div>

            );
   
        }
    }
    
export default withRouter(Auth)



