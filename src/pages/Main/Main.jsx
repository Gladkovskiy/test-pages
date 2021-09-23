import React from 'react'
import classes from './Main.module.sass'

import ImageFadeSlider from '../../components/UI/ImageFadeSlider/ImageFadeSlider'
import {mainImage} from '../../img/importImage'

const Main = () => {
  return (
    <div className={classes.Main}>
      <div className={classes.full}>
        <ImageFadeSlider
          width="100%"
          height="10rem"
          slideItem={mainImage}
          arrows={false}
          pauseOnHover={false}
          easing="ease-in-out"
          transitionDuration={2000}
        />
      </div>
    </div>
  )
}

export default Main
