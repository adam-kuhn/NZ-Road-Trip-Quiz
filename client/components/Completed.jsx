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
        <p>You scored {this.props[this.props.topic]}/10</p>
        <button className='home-button' type='button' onClick={this.handleClick}>
          <HomeIcon /></button>
      </div>
    )
  }
}
function mapStateToProps (state) {
  return {
    road: state.score.road,
    trekking: state.score.trekking,
    picture: state.score.picture,
    fun: state.score.fun,
    speed: state.score.speed
  }
}

export default connect(mapStateToProps)(withRouter(Completed))
