import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'

import HomeIcon from './HomeIcon'
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
        <button className='home-button' type='button' onClick={this.handleClick}>
          <HomeIcon /></button>
      </div>
    )
  }
}

export default connect()(withRouter(Completed))
