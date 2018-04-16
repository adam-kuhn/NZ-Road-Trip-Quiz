import React from 'react'
import {connect} from 'react-redux'

import Responses from './Responses'
import {getNextQuestion, finishedQuiz} from '../actions'

class Questions extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      response: ''
    }
    this.handleClick = this.handleClick.bind(this)
    this.nextQuestion = this.nextQuestion.bind(this)
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
  render () {
    return (
      <div>
        <h3>{this.props.questions[this.props.questionNum].question}</h3>
        {/* <Responses /> */}
        <div>
          {this.props.answers.map(answer => {
            return (
              <label key={answer.id}>{answer.response}
                <input type='radio' onChange={this.handleClick} value={answer.id}
                  checked={this.state.selected === answer.id}
                  data-correct={answer.correct} />
              </label>
            )
          })}
          <button type='button' disabled={this.state.disabled}
            onClick={this.nextQuestion}>Next</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    questions: state.quiz.questions,
    questionNum: state.quiz.questionNum,
    length: state.quiz.questions.length,
    answers: state.quiz.questions[state.quiz.questionNum].responses

  }
}

export default connect(mapStateToProps)(Questions)
