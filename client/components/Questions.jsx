import React from 'react'

import Responses from './Responses'

class Questions extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      response: ''
    }
  }
  componentDidMount () {
    // api call for questions
  }
  render () {
    return (
      <div>
        <h3>This is the first Question</h3>
        <Responses />
      </div>
    )
  }
}

export default Questions
