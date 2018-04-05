import React from 'react'

// class Quiz extends React.Component {
//   constructor ({match}) {
//     super({match})
//   }
//   componentDidMount () {
//   // make api call with params, to get questions
//   }

//   render ({match}) {
//     const type = match.params.topic
//     return (
//       <h1>This is a {type} quiz</h1>
//     )
//   }
// }
function Quiz ({match}) {
  const topic = match.params.topic
  return (
    <h1>This is a {topic} quiz </h1>
  )
}

export default Quiz
