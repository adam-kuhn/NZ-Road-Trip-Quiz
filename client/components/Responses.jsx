import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import Sound from 'react-sound'

import Description from './Description'
import QuestionStepper from './QuestionStepper'
import {getNextQuestion, finishedQuiz} from '../actions'

class Answers extends React.Component {
  constructor () {
    super()
    this.state = {
      selected: '',
      correct: '',
      description: '',
      descriptionImg: '',
      submit: true,
      next: true,
      answer: false,
      score: 0,
      audio: '',
      seconds: 0,
      intervalId: '',
      counting: false
    }
    this.handleClick = this.handleClick.bind(this)
    this.submitAnswer = this.submitAnswer.bind(this)
    this.nextQuestion = this.nextQuestion.bind(this)
    this.timer = this.timer.bind(this)
    this.startCounting = this.startCounting.bind(this)
  }

  componentDidMount () {
    if (this.props.topic === 'speed') {
      this.startCounting()
    }
  }
  startCounting () {
    const intervalId = setInterval(this.timer, 500)
    this.setState({
      intervalId,
      counting: true
    })
  }
  timer () {
    if (this.state.seconds === 10) {
      clearInterval(this.state.intervalId)
      this.setState({
        seconds: 0
      })
      this.nextQuestion()
    } else {
      const time = this.state.seconds
      this.setState({
        seconds: time + 1
      })
    }
  }

  handleClick (evt) {
    const correct = evt.target.getAttribute('data-correct')
    const description = evt.target.getAttribute('data-description')
    const descriptionImg = evt.target.getAttribute('data-description-img')
    this.setState({
      selected: Number(evt.target.value),
      correct,
      description,
      descriptionImg,
      submit: false
    })
  }

  submitAnswer () {
    if (this.state.correct === 'yes') {
      this.setState({
        score: this.state.score + 1,
        audio: '/sounds/correct.mp3'

      })
    } else {
      this.setState({
        audio: '/sounds/wrong.mp3'
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
      this.props.dispatch(finishedQuiz(this.props.match.params.topic,
        this.state.score))
      clearInterval(this.state.intervalId)
    } else {
      if (this.props.topic === 'speed') {
        clearInterval(this.state.intervalId)
        this.setState({
          seconds: 0
        })
        this.startCounting()
      }
      this.props.dispatch(getNextQuestion(this.props.questionNum))
      this.setState({
        submit: true,
        next: true,
        answer: false,
        finsished: true
      })
    }
  }

  render () {
    return (
      <div className='main-container'>
        <ul className='resp-container'>
          {this.props.answers.map(answer => {
            return (
              <li className='resp-item' key={answer.id}>
                <label>{answer.response.includes('images') ? <img src={answer.response} /> : answer.response}
                  <input type='radio' onChange={this.handleClick} value={answer.id}
                    checked={this.state.selected === answer.id}
                    data-correct={answer.correct}
                    data-description={answer.description}
                    data-description-img={answer.descriptionImg}
                    disabled={this.state.answer} />
                </label>
              </li>
            )
          })}
        </ul>
        {this.state.counting && <p>{this.state.seconds}</p>}
        {!this.state.next && <Description text={this.state.description}
          img={this.state.descriptionImg}
          correct={this.state.correct}/>}
        <button type='button' disabled={this.state.submit}
          onClick={this.submitAnswer}>
        Submit Answer</button>
        <button type='button' disabled={this.state.next}
          onClick={this.nextQuestion}>Next</button>
        {!this.state.next && <Sound url={this.state.audio} playStatus={Sound.status.PLAYING} />}
        <QuestionStepper />
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
