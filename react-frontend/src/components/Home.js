import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import ParticleEffectButton from 'react-particle-effect-button'
import Button from 'react-bootstrap/Button'
import DemoBlock from './DemoBlock'
import demos from './demos'

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
