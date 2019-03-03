import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {withRouter} from 'react-router-dom'
import Countdown from 'react-countdown-now';

// A LoginForm component that can be exported at the end of the file and can be reused anywhere
class Logout extends Component
{
    constructor(props)
    {
      super(props)
    }

    componentDidMount()
    {
        this.props.setLoggedOut();
        console.log("Counting down")

        setTimeout(function() { //Start the timer
            this.props.history.push('/Home');
            console.log("Done Counting down")

        }.bind(this), 3000)

    }
    render()
    {
        // Render the forms required for login
        return(
                <div>Logged out.. Redirecting to home..</div>
            );
   
        }
    }
    
    export default withRouter(Logout)
    