import React from 'react'
import {Link} from 'react-router-dom'
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
        <button className='resp-item' type='button' onClick={this.handleClick} value='/quiz/road'>Road Quiz&nbsp;{this.props.roadScore}/10</button>
        <button className='resp-item' type='button' onClick={this.handleClick} value='/quiz/trekking'>Trekking Quiz&nbsp;{this.props.trekScore}/10</button>
        <button className='resp-item' type='button' onClick={this.handleClick} value='/quiz/picture'>Picture Quiz&nbsp;{this.props.picScore}/10</button>
        <button className='resp-item' type='button' onClick={this.handleClick} value='/quiz/fun'>Fun Facts Quiz&nbsp;{this.props.funScore}/10</button>
        <button className='resp-item' type='button' onClick={this.handleClick} value='/quiz/speed'>Speed Round&nbsp;{this.props.speedScore}/10 - You have to be quick with only 10 seconds to answer each question!</button>
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
