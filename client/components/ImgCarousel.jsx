import React from 'react'
import {Carousel} from 'react-responsive-carousel'

const images = ['/images/questions/alluvial_fan.jpg', '/images/questions/east-coast.jpg']
class ImgCarousel extends React.Component {
  render () {
    return (
      <Carousel autoPlay>
        {images.map((image, idx) => {
          return (
            <div key={idx}>
              <img src={image} />
            </div>
          )
        })}
      </Carousel>
    )
  }
}

export default ImgCarousel
