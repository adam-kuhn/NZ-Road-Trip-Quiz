import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'

class QuizSideBar extends React.Component {
  constructor () {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (e) {
    this.props.history.push(e.target.value)
  }
  render () {
    return (
      <ul className='sidebar'>
        <button className='flex-item' type='button' onClick={this.handleClick} value='/quiz/road'>
          <h2>Road Quiz&nbsp;{this.props.roadScore}/10</h2>
        </button>
        <button className='flex-item' type='button' onClick={this.handleClick} value='/quiz/trekking'>
          <h2>Trekking Quiz&nbsp;{this.props.trekScore}/10</h2>
        </button>
        <button className='flex-item' type='button' onClick={this.handleClick} value='/quiz/picture'>
          <h2>Picture Quiz&nbsp;{this.props.picScore}/10</h2>
        </button>
        <button className='flex-item' type='button' onClick={this.handleClick} value='/quiz/fun'>
          <h2>Fun Facts Quiz&nbsp;{this.props.funScore}/10</h2>
          </button>
        <button className='flex-item' type='button' onClick={this.handleClick} value='/quiz/speed'>
          <h2>Speed Round&nbsp;{this.props.speedScore}/10</h2>
        </button>
      </ul>
    )
  }
}

function mapStateToProps (state) {
  return {
    roadScore: state.score.road,
    trekScore: state.score.trekking,
    picScore: state.score.picture,
    funScore: state.score.fun,
    speedScore: state.score.speed
  }
}

export default connect(mapStateToProps)(withRouter(QuizSideBar))
