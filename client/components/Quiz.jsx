import React from 'react'
import {connect} from 'react-redux'
import request from 'superagent'

import Questions from './Questions'

import {getQuiz} from '../actions'

class Quiz extends React.Component {
  componentDidMount () {
    console.log(this.props.match.params.topic)
    this.props.dispatch(getQuiz(this.props.match.params.topic))
  }
  
  render () {
    return (
      <div>
        <h1>{this.props.match.params.topic} quiz</h1>
      </div>
    )
  }
}

export default connect()(Quiz)
