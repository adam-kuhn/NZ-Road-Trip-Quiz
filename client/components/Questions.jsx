import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'

import Responses from './Responses'

import {reset} from '../actions'

class Questions extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      response: ''
    }
    this.handleClick = this.handleClick.bind(this)
    this.goHome = this.goHome.bind(this)
  }
  handleClick (evt) {
    const correct = evt.target.correct
    this.setState({
      selected: Number(evt.target.value),
      correct,
      disabled: false
    })
  }
  goHome () {
    this.props.history.push('/')
    this.props.dispatch(reset())
  }
  render () {
    return (
      <div>
        {this.props.questions[this.props.questionNum].style === 'multi-img'
          ? <div>
            <img src={this.props.questions[this.props.questionNum].image} />
            <p>{this.props.questions[this.props.questionNum].question}</p>
          </div>
          : <h3>{this.props.questions[this.props.questionNum].question}</h3> }
        <Responses topic={this.props.topic} />
        <button type ='button' onClick={this.goHome}>Home</button>
      </div>
    )
  }
}
function mapStateToProps (state) {
  return {
    questions: state.quiz.questions,
    questionNum: state.quiz.questionNum
  }
}

export default connect(mapStateToProps)(withRouter(Questions))
