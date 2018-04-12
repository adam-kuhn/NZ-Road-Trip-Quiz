import React from 'react'
import {connect} from 'react-redux'

import Questions from './Questions'

import {getQuiz} from '../actions'

class Quiz extends React.Component {
  componentDidMount () {
    this.props.dispatch(getQuiz(this.props.match.params.topic))
  }

  componentDidUpdate () {
    this.props.dispatch(getQuiz(this.props.match.params.topic))
  }

  capitilize (topic) {
    return topic.charAt(0).toUpperCase() + topic.slice(1)
  }
  render () {
    const quizTopic = this.capitilize(this.props.match.params.topic)
    return (
      <div>
        <h1>{quizTopic} quiz</h1>
      </div>
    )
  }
}

export default connect()(Quiz)
