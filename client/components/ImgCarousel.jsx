import React from 'react'
import {Carousel} from 'react-responsive-carousel'

class ImgCarousel extends React.Component {
  render () {
    return (
      <Carousel autoPlay>
        <div>
          <img src='/images/questions/alluvial_fan.jpg' />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src='/images/questions/east-coast.jpg' />
          <p className="legend">Legend 2</p>
        </div>
      </Carousel>
    )
  }
}

export default ImgCarousel
