import React from 'react'
import request from 'superagent'

import Questions from './Questions'

class Quiz extends React.Component {
  componentDidMount () {
    return request
      .post('/api/v1/quiz')
      .set('Content-Type', 'applicatoin/json')
      .send()
      .then(res => {
        console.log(res)
      })
  }
  render () {
    return (
      <div>
        <h1>{this.props.match.params.topic} quiz</h1>
      </div>
    )
  }
}

export default Quiz
