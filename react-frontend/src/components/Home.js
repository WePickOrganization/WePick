import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import ParticleEffectButton from 'react-particle-effect-button'
import Button from 'react-bootstrap/Button'
import DemoBlock from './DemoBlock'
import demos from './GenerateButton'

import '../stylesheets/styles.css'

class Home extends Component {
  render () {
    return (
<<<<<<< HEAD
=======
      
    

///////////////////////////////////////////////////////////////////////////////////////
>>>>>>> 2e877204f04e996e8f0aa2f1305baecd32430cba

      <div
        style={{
          padding: '10px 0',
          background: '#fff', //This value is for the home background color
          width: '100%',
          minHeight: '100vh',
          color: '#000'
        }}
      >
        <h1 style={{ textAlign: 'center' }}>
        </h1>

        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}
        >
          {demos.map((demo, index) => (
            <DemoBlock
              key={index}
              background={demo.background}
              text={demo.text}
              buttonStyles={demo.buttonStyles}
              buttonOptions={demo.buttonOptions}
            />
          ))}
        </div>
      </div>
    )
          }
        }

export default withRouter(Home)
