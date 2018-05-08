import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'

import Responses from './Responses'

import {getNextQuestion, finishedQuiz, reset} from '../actions'

class Questions extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      response: '',
      seconds: 0
    }
    this.handleClick = this.handleClick.bind(this)
    this.nextQuestion = this.nextQuestion.bind(this)
    this.goHome = this.goHome.bind(this)
    this.timer = this.timer.bind(this)
  }
  timer () {
    console.log(this.state.seconds)
    const time = this.state.seconds
    this.setState({
      seconds: time + 1
    })
  }
  componentDidMount () {
    if (this.props.topic === 'speed') {
      console.log('topic mount', this.props.topic)
    }
  }
  componentDidUpdate () {
    if (this.props.topic === 'speed') {
      console.log('topic', this.props.topic)
      setInterval(1000, this.timer())
      if (this.state.seconds === 10) {
        console.log(this.state.seconds, 'end')
        return 'done'
      }
    }
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
        {this.props.questions[this.props.questionNum].style === 'multi-img'
          ? <div>
            <img src={this.props.questions[this.props.questionNum].image} />
            <p>{this.props.questions[this.props.questionNum].question}</p>
          </div>
          : <h3>{this.props.questions[this.props.questionNum].question}</h3> }
        <Responses />
        <button type ='button' onClick={this.goHome}>Home</button>
      </div>
    )
  }
}
// function timer (state) {
//   console.log(this.state.count)
//   this.setState({
//     count: this.state.count++
//   })
// }
function mapStateToProps (state) {
  return {
    questions: state.quiz.questions,
    questionNum: state.quiz.questionNum
  }
}

export default connect(mapStateToProps)(withRouter(Questions))
