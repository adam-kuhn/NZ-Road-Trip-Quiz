import React from 'react'
import {withRouter} from 'react-router'

import {backHome} from '../actions'

class Completed extends React.Component {
  constructor () {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    this.props.history.push('/')
  }

  render () {
    return (
      <div>
        <p>quiz completed</p>
        <button type='button' onClick={this.handleClick}>
      Back To Home</button>
      </div>
    )
  }
}

export default withRouter(Completed)
