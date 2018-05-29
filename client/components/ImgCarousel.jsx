import React from 'react'
import {Carousel} from 'react-responsive-carousel'

import images from '../lib/carouselImg'

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
