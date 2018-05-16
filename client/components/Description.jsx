import React from 'react'

function Description (props) {
  return (
    <div>
      {props.img !== null && <img src={props.img} />}
      <p className={props.correct}>{props.text}</p>
    </div>

  )
}

export default Description
