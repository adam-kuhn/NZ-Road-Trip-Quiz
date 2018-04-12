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
        <h3>{this.props.questions[0].question}</h3>
        <Responses />
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    questions: state.quiz
  }
}

export default connect(mapStateToProps)(Questions)
