import React from 'react'
import {connect} from 'react-redux'

import Questions from './Questions'
import Completed from './Completed'

import {getQuiz} from '../actions'

class Quiz extends React.Component {
  componentDidMount () {
    this.props.dispatch(getQuiz(this.props.match.params.topic))
  }

  capitilize (topic) {
    return topic.charAt(0).toUpperCase() + topic.slice(1)
  }
  render () {
    const quizTopic = this.capitilize(this.props.match.params.topic)
    return (
      <div>
        <h1>{quizTopic} Quiz</h1>
        {this.props.showQuestions && <Questions topic={this.props.match.params.topic} />}
        {this.props.showCompleted && <Completed topic={this.props.match.params.topic}/>}
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    showQuestions: state.display.showQuestions,
    showCompleted: state.display.showCompleted
  }
}

export default connect(mapStateToProps)(Quiz)
