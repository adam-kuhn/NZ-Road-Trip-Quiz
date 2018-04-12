import React from 'react'
import {connect} from 'react-redux'

class Answers extends React.Component {
  constructor () {
    super()
    this.state = {
      selected: '',
      correct: ''
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick (evt) {
    const correct = evt.target.correct
    this.setState({
      selected: Number(evt.target.value),
      correct: correct
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
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    answers: state.quiz.questions[state.quiz.questionNum].responses
  }
}

export default connect(mapStateToProps)(Answers)
