import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';


import '../stylesheets/ArtistEnter.css'
// A LoginForm component that can be exported at the end of the file and can be reused anywhere
class ArtistEnter extends Component
{   
    
    constructor(props)
    {

      super(props)
      
      // Define the variables to be stored in our state
      this.state = {
        spotUser1: '',
        spotUser2: '',
        spotUser3: '',
        spotUser4: '',
        spotUser5: '',
        spotUsers : [],
        genre: '',
        spotifyEmbedURL: 'https://open.spotify.com/embed/playlist/'
      };

      
      // This lets us define functions outside of the constructor
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }


    // Function that gets called when values inside a text field are changed and sets them in our state
    handleChange(event) 
    {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;    
        
        this.setState({
            [name]: value     
        });
    }
    
    
    // Function that gets called when we press our submit button, in this case SignUp/Login
    handleSubmit(event)
    {
        var self = this;

        event.preventDefault();

        this.state.spotUsers[0] = this.props.email
        this.state.spotUsers[1] = this.state.spotUser1
        this.state.spotUsers[2] = this.state.spotUser2
        this.state.spotUsers[3] = this.state.spotUser3
        this.state.spotUsers[4] = this.state.spotUser4
        this.state.spotUsers[5] = this.state.spotUser5
        console.log(this.state.spotUsers);

        // Perform Axios POST Request
        // Sent to Flask server's route '/createPlaylist'
        axios.post('/CreatePlaylist', {
          spotUsers: this.state.spotUsers
          })
          .then(function (response) {
            if(response.status==200)
            {
                var playlistID;
                
                console.log(response);
                playlistID = response.data.data;
                console.log("Playlist ID: " + playlistID);
                self.state.spotifyEmbedURL = "https://open.spotify.com/embed/playlist/" + playlistID;
                console.log("Playlist URL: " + self.state.spotifyEmbedURL);
                self.forceUpdate();
            }
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
                <h3>WePick Email Addresses</h3>
                <form onSubmit={this.handleSubmit} className="FormFields" onSubmit={this.handleSubmit}>

                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="artistFour"></label>
                        <input type="text" id="spotUser1" className="FormField__Input" placeholder="WePick email" name="spotUser1" value={this.state.spotUser1} onChange={this.handleChange}></input>
                        <input type="text" id="spotUser2" className="FormField__Input" placeholder="WePick email" name="spotUser2" value={this.state.spotUser2} onChange={this.handleChange}></input>
                        <input type="text" id="spotUser3" className="FormField__Input" placeholder="WePick email" name="spotUser3" value={this.state.spotUser3} onChange={this.handleChange}></input>
                        <input type="text" id="spotUser4" className="FormField__Input" placeholder="WePick email" name="spotUser4" value={this.state.spotUser4} onChange={this.handleChange}></input>
                        <input type="text" id="spotUser5" className="FormField__Input" placeholder="WePick email" name="spotUser5" value={this.state.spotUser5} onChange={this.handleChange}></input>
                    </div>

                    <div id="mainselection">
                        <select>
                            <option value={this.state.genre}>Relaxing</option>
                            <option value={this.state.genre}>Driving</option>
                            <option value={this.state.genre}>Partying</option>
                            <option value={this.state.genre}>Studying</option>
                            <option value={this.state.genre}>Working</option>
                        </select>
                    </div>

                    <div className="FormField">
                        <button className="FormField__Button mr-20">Generate Playlist</button> 
                    </div>

                    <iframe src={this.state.spotifyEmbedURL} width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>

                </form>

            </div>
            );
   
        }
    
    }   
export default ArtistEnter