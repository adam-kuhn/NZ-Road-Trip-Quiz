import React from 'react'

import Questions from './Questions'

class Quiz extends React.Component {
  render () {
    return (
      <h1>{this.props.match.params.topic} quiz</h1>
    )
  }
}

export default Quiz
