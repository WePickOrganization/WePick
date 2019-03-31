import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

import '../stylesheets/Stats.css'

// A LoginForm component that can be exported at the end of the file and can be reused anywhere
class Stats extends Component
{
    constructor(props)
    {
    
      super(props) 

      this.state = {
        email: this.props.email,
      }
    }

    componentDidMount()
    {
        axios.post('/getStats', {
              email: this.state.email,
          })
          .then(function (response) {
            console.log("Server Response: " + response)
        })

    }
    render()
    {
        
        // Render the forms required for login
        return(
            
          <div id="stats" className="row">
            <div id="userPlaylists" className="column"></div>
            <div id="userTopArtists"className="column"></div>
            <div id="userTopTracks" className="column"></div>
          </div> 
          
            );
   
        }
    
    }   
export default Stats