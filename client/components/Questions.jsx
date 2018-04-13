import React from 'react'
import {connect} from 'react-redux'

import Responses from './Responses'

class Questions extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      response: ''
    }
  }
  render () {
    return (
      <div>
        <h3>{this.props.questions[this.props.questionNum].question}</h3>
        <Responses />
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    questions: state.quiz.questions,
    questionNum: state.quiz.questionNum,
    length: state.quiz.questions.length
  }
}

export default connect(mapStateToProps)(Questions)
