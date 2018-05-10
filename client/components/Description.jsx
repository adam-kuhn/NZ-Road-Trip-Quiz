import React from 'react'

function Description (props) {
  return (
    <div>
      {false && <p>test</p>}
      <p>{props.text}</p>
    </div>

  )
}

export default Description
