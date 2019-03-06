import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import withRouter from 'react-router-dom'; 

import ParticleEffectButton from 'react-particle-effect-button'

class Home extends Component{

    constructor(){

        super()
    }

    render(){
        return (
            <ParticleEffectButton
              color='#121019'
              hidden={this.state.hidden}
            >
              BUTTON CONTENT GOES HERE
            </ParticleEffectButton>
          ) 
    }
}
export default withRouter(Home)