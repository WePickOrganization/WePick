import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class RegisterForm extends Component
{
    render()
    {
        return(
            <div className="FormCenter">

                <form className="FormFields" onSubmit={this.handleSubmit}>

                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="email">Email</label>
                        <input type="email" id="email" className="FormField__Input" placeholder="Enter your email address" name="email"></input>
                    </div>

                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="password">Password</label>
                        <input type="Password" id="Password" className="FormField__Input" placeholder="Enter your password" name="password"></input>
                    </div>

                    <div className="FormField">
                        <label className="FormField__CheckboxLabel">
                            <input className="FormField__Checkbox" type="checkbox" name="hasAgreed" /> I agree all statements in <a href="" className="FormField__TermsLink">terms of service</a>
                        </label>
                    </div>

                    <div className="FormField">
                        <button className="FormField__Button mr-20">Sign Up</button> <Link to="/"
                            className="FormField__Link">Create an account</Link>
                    </div>

                </form>

            </div>
            );
   
        }
    }
    
    export default RegisterForm
    