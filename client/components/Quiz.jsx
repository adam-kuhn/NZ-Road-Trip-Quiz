import React from 'react'
import {connect} from 'react-redux'
import request from 'superagent'

import Questions from './Questions'

import {getQuiz} from '../actions'

class Quiz extends React.Component {
  componentDidMount () {
    console.log(this.props.match.params.topic)
    const quizTopic = {topic: this.props.match.params.topic}
    request
      .post('/api/v1/quiz')
      .set('Content-Type', 'application/json')
      .send(quizTopic)
      .then(res => {
        console.log(res)
      })
  }
  componentDidUpdate () {
    console.log(this.props.match.params.topic)
    const quizTopic = {topic: this.props.match.params.topic}
    request
      .post('/api/v1/quiz')
      .set('Content-Type', 'application/json')
      .send(quizTopic)
      .then(res => {
        console.log(res.body)
      })
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
