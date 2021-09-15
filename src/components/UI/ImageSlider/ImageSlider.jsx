import React from 'react'
import classes from './ImageSlider.module.sass'
import 'react-slideshow-image/dist/styles.css'
import {Slide} from 'react-slideshow-image'

const ImageSlider = ({width, height, slideItem}) => {
  return (
    <div style={{width}} className={classes.ImageSlider}>
      <Slide easing="ease" indicators={false} duration={3000}>
        {slideItem.map((item, index) => (
          <div className={classes.eachSlide} key={index + 's'}>
            <div style={{backgroundImage: `url(${item})`, height}} />
          </div>
        ))}
      </Slide>
    </div>
  )
}

export default ImageSlider
