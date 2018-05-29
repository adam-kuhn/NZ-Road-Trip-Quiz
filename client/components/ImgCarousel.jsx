import React from 'react'
import {Carousel} from 'react-responsive-carousel'

import images from '../lib/carouselImg'

class ImgCarousel extends React.Component {
  render () {
    return (
      <div className='carousel-container'>
        <Carousel autoPlay infiniteLoop showArrows={true}>
          {images.map((image, idx) => {
            return (
              <div key={idx}>
                <img src={image} />
              </div>
            )
          })}
        </Carousel>
      </div>
    )
  }
}

export default ImgCarousel
