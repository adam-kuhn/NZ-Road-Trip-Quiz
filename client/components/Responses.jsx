import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'

import Description from './Description'
import {getNextQuestion, finishedQuiz, correct} from '../actions'

class Answers extends React.Component {
  constructor () {
    super()
    this.state = {
      selected: '',
      correct: '',
      description: '',
      submit: true,
      next: true,
      answer: false,
      score: 0
    }
    this.handleClick = this.handleClick.bind(this)
    this.submitAnswer = this.submitAnswer.bind(this)
    this.nextQuestion = this.nextQuestion.bind(this)
  }
  handleClick (evt) {
    const correct = evt.target.getAttribute('data-correct')
    const description = evt.target.getAttribute('data-description')
    this.setState({
      selected: Number(evt.target.value),
      correct,
      description,
      submit: false
    })
  }

  submitAnswer () {
    if (this.state.correct === 'yes') {
      this.setState({
        score: this.state.score + 1
      })
    }
    this.setState({
      next: false,
      submit: true,
      answer: true
    })
  }
  nextQuestion () {
    if (this.props.questionNum + 1 === this.props.length) {
      this.props.dispatch(finishedQuiz())
      return
    }
    this.props.dispatch(getNextQuestion(this.props.questionNum))
    this.setState({
      submit: true,
      next: true,
      answer: false
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
                data-correct={answer.correct}
                data-description={answer.description}
                disabled={this.state.answer} />
            </label>
          )
        })}
        {!this.state.next && <Description text={this.state.description} />}
        <button type='button' disabled={this.state.submit}
          onClick={this.submitAnswer}>
        Submit Answer</button>
        <button type='button' disabled={this.state.next}
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

export default connect(mapStateToProps)(withRouter(Answers))
