import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

// A LoginForm component that can be exported at the end of the file and can be reused anywhere
class ArtistEnter extends Component
{
    constructor()
    {
      super()
      
      // Define the variables to be stored in our state
      this.state = {
        artistOne: '',
        artistTwo: '',
        artistThree: '',
        artistFour: ''
      };
      
      // This lets us define functions outside of the constructor
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    
    }

    // Function that gets called when values inside a text field are changed and sets them in our state
    handleChange(event) 
    {
        let target = event.target;
        let artistOne = target.artistOne;
        let artistTwo = target.artistTwo;
        let artistThree = target.artistThree;
        let artistFour = target.rtistFour;

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
        axios.get('/CreatePlaylist', {
            params: {
              artistOne: this.state.artistOne,
              artistTwo: this.state.artistTwo,
              artistThree: this.state.artistThree,
              artistFour: this.state.artistFour

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
                        <label className="FormField__Label" htmlFor="email">Email</label>
                        <input type="text" id="artistOne" className="FormField__Input" placeholder="Enter your email address" name="email" value={this.state.email} onChange={this.handleChange}></input>
                    </div>

                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="password">Password</label>
                        <input type="text" id="artistTwo" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange}></input>
                    </div>

                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="password">Password</label>
                        <input type="text" id="artistThree" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange}></input>
                    </div>

                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="password">Password</label>
                        <input type="text" id="artistFour" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange}></input>
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
    