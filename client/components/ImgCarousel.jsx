import React from 'react'
import {Carousel} from 'react-responsive-carousel'
// import Carousel from 'react-image-carousel'
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'
// const images = ['/images/alluvial_fan.jpg', '/images/east-coast.jpg']
// import 'style!css!react-responsive-carousel/lib/styles/main.css'

// carousel styles
// import 'style!css!react-responsive-carousel/lib/styles/carousel.css'
// import 'react-responsive-carousel/lib/styles/carousel.min.css'
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
      // <Carousel images={images}
      //   thumb={true}
      //   loop={true}
      //   autoplay={3000}/>
    )
  }
}

export default ImgCarousel
