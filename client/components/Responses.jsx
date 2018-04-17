import React from 'react'
import {connect} from 'react-redux'

import {getNextQuestion, finishedQuiz} from '../actions'

class Answers extends React.Component {
  constructor () {
    super()
    this.state = {
      selected: '',
      correct: '',
      disabled: true
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
    if (this.props.questionNum + 1 === this.props.length) {
      this.props.dispatch(finishedQuiz())
      return
    }
    this.props.dispatch(getNextQuestion(this.props.questionNum))
    this.setState({
      disabled: true
    })
  }

  render () {
    return (
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
    )
  }
}

function mapStateToProps (state) {
  return {
    answers: state.quiz.questions[state.quiz.questionNum].responses,
    questionNum: state.quiz.questionNum,
    length: state.quiz.questions.length
  }
}

export default connect(mapStateToProps)(Answers)
