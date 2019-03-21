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
        spotUser: ''
      };

      
      // This lets us define functions outside of the constructor
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);

    
    }

    componentDidMount() {
        console.log('GrandChild did mount.');

        axios.get('/getArtists')
          .then(function (response) {
            console.log(response);
          })
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
              artistOne: this.state.artistOne,
              artistTwo: this.state.artistTwo,
              artistThree: this.state.artistThree,
              artistFour: this.state.artistFour,
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
                <form onSubmit={this.handleSubmit} className="FormFields" onSubmit={this.handleSubmit}>

                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="artistOne">Artist 1</label>
                        <input type="text" id="artistOne" className="FormField__Input" placeholder="Enter artist name" name="artistOne" value={this.state.artistOne} onChange={this.handleChange}></input>
                    </div>

                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="artistTwo">Artist 2</label>
                        <input type="text" id="artistTwo" className="FormField__Input" placeholder="Enter artist name" name="artistTwo" value={this.state.artistTwo} onChange={this.handleChange}></input>
                    </div>

                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="artistThree">Artist 3</label>
                        <input type="text" id="artistThree" className="FormField__Input" placeholder="Enter artist name" name="artistThree" value={this.state.artistThree} onChange={this.handleChange}></input>
                    </div>

                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="artistFour">Artist 4</label>
                        <input type="text" id="artistFour" className="FormField__Input" placeholder="Enter your password" name="artistFour" value={this.state.artistFour} onChange={this.handleChange}></input>
                    </div>

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