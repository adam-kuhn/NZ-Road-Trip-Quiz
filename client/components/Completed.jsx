import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'

import {reset} from '../actions'

class Completed extends React.Component {
  constructor () {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    this.props.history.push('/')
    this.props.dispatch(reset())
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

export default connect()(withRouter(Completed))
