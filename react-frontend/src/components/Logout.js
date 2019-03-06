import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {withRouter} from 'react-router-dom'
import Countdown from 'react-countdown-now';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

// A LoginForm component that can be exported at the end of the file and can be reused anywhere
class Logout extends Component
{
    constructor(props)
    {
      super(props)
    }

    componentDidMount()
    {
        // Clear any state held by the parent component (Index.jsx)
        this.props.setLoggedOut();

        // After 3 seconds, redirect the user to the home page
        setTimeout(function() {
            this.props.history.push('/Home');
        }.bind(this), 3000)

    }
    render()
    {
        // Render the forms required for login
        return(
            <div>
                <div>Logged out.. Redirecting to home..</div>
                <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
                </div>
            </div>
              
            );
   
        }
    }
    
    export default withRouter(Logout)
    