import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'

import Responses from './Responses'

import {getNextQuestion, finishedQuiz, reset} from '../actions'

class Questions extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      response: ''
    }
    this.handleClick = this.handleClick.bind(this)
    this.nextQuestion = this.nextQuestion.bind(this)
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
  nextQuestion () {
    if (this.props.questionNum === this.props.length + 1) {
      this.props.dispatch(finishedQuiz())
    }
    this.props.dispatch(getNextQuestion(this.props.questionNum))
  }
  goHome () {
    this.props.history.push('/')
    this.props.dispatch(reset())
  }
  render () {
    return (
      <div>
        <h3>{this.props.questions[this.props.questionNum].question}</h3>
        <Responses />
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
