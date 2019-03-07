import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import ParticleEffectButton from 'react-particle-effect-button'
import Button from 'react-bootstrap/Button'
import DemoBlock from './DemoBlock'
import demos from './demos'
import ribbon from './ribbon.png'

import '../stylesheets/styles.css'

class Home extends Component {
  render () {
    return (
      <div
        style={{
          padding: '48px 0',
          background: '#000',
          width: '100%',
          minHeight: '100vh',
          color: '#fff'
        }}
      >
        <a href='https://github.com/transitive-bullshit/react-particle-effect-button'>
          <img
            src={ribbon}
            alt='Fork me on GitHub'
            style={{
              position: 'absolute',
              zIndex: 1000,
              top: 0,
              right: 0,
              border: 0
            }}
          />
        </a>

        <h1 style={{ textAlign: 'center' }}>
          React Particle Effect Buttons
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
