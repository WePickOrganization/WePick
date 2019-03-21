import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';



// A LoginForm component that can be exported at the end of the file and can be reused anywhere
class ArtistEnter extends Component
{
    constructor(props)
    {
    
      super(props)

    
    
      
      // Define the variables to be stored in our state
      this.state = {
        artistOne: '',
        artistTwo: '',
        artistThree: '',
        artistFour: '',
        spotUser: '',
        artists : []
      };

      
      // This lets us define functions outside of the constructor
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);

    
    }

    componentDidMount() {
        console.log('GrandChild did mount.');

        axios.get('/getArtists')
          .then(response =>{this.state.artists = response.data;console.log(this.state.artists);this.forceUpdate();}
          )
          .catch(function (error) {
            console.log(error);
          });
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
        event.preventDefault();
        console.log(this.state);

        // Perform Axios GET Request
        // Sent to Flask server's route '/createUser'\
        // Send our state variables captured by our handleChange function 
        axios.post('/CreatePlaylist', {
            params: {
              spotUser: this.state.spotUser
            }
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
                <h1>Current Artists:</h1>
                <p>{this.state.artists}</p>
                <form onSubmit={this.handleSubmit} className="FormFields" onSubmit={this.handleSubmit}>

                    

                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="artistFour">Spotify Email</label>
                        <input type="text" id="spotUser" className="FormField__Input" placeholder="Enter your password" name="spotUser" value={this.state.spotUser} onChange={this.handleChange}></input>
                    </div>

                    <div className="FormField">
                        <button className="FormField__Button mr-20">Create</button> <Link to="/"
                            className="FormField__Link">Create a playlist</Link>
                    </div>

                </form>

            </div>
            );
   
        }
    
    }   
export default ArtistEnter