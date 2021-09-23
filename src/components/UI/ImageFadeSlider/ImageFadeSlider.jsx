import React from 'react'
import classes from './ImageFadeSlider.module.sass'
import 'react-slideshow-image/dist/styles.css'
import {Fade} from 'react-slideshow-image'

const ImageFadeSlider = ({
  width,
  height,
  slideItem,
  duration = 3000,
  arrows = true,
  pauseOnHover = true,
  easing = 'ease',
  transitionDuration = 1000,
}) => {
  return (
    <div style={{width}} className={classes.ImageFadeSlider}>
      <Fade
        easing="easing"
        indicators={false}
        duration={duration}
        arrows={arrows}
        pauseOnHover={pauseOnHover}
        transitionDuration={transitionDuration}
      >
        {slideItem.map((item, index) => (
          <div className={classes.eachFade} key={index + 'h'}>
            <div>
              <img src={item} alt="AlexHotel" />
            </div>
          </div>
        ))}
      </Fade>
    </div>
  )
}

export default ImageFadeSlider
