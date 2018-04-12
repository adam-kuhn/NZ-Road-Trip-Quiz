import React from 'react'
import {connect} from 'react-redux'

class Answers extends React.Component {
  render () {
    return (
      <div>
        {this.props.answers.map(answer => {
          return (
            <label key={answer.id}>{answer.response}
              <input type='radio' value={answer.correct} />
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
