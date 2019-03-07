import React, { Component } from 'react'

import ParticleEffectButton from 'react-particle-effect-button'
import Button from 'react-bootstrap/Button'


class Home extends Component {
  state = {
    hidden: false
  }

  render () {
    return (
      <ParticleEffectButton
        color='#121019'
        hidden={this.state.hidden}
      >
<Button variant="primary" size="lg" block>
    Block level button
  </Button>

      </ParticleEffectButton>
    )
  }
}

export default withRouter(Home)
