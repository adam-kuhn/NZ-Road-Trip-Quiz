import React from 'react'

function Description (props) {
  return (
    <div>
      {props.img !== null && <img src='/images/questions/east-coast.jpg' />}
      {props.img === null && <p>no image</p>}
      <p>{props.text}</p>
    </div>

  )
}

export default Description
