import React from 'react'

function Description (props) {
  return (
    <div>
      {props.img !== null && <img src={props.img} />}
      <div className='description'>
        <p className={props.correct}>{props.text}</p>
      </div>
    </div>

  )
}

export default Description
