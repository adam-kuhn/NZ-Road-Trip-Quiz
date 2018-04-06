import React from 'react'

import Questions from './Questions'

// function Quiz ({match}) {
//   const topic = match.params.topic
//   return (
//     <div>
//       <h1>This is a {topic} quiz </h1>
//       <Questions />
//     </div>
//   )
// }

class Quiz extends React.Component {
  render () {
    return (
      <h1>{this.props.match.params.topic} quiz</h1>
    )
  }
}

export default Quiz
