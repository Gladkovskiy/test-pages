import React from 'react'
import classes from './FotoGallery.module.sass'

import Gallary from '../../components/Gallery/Gallary'

const FotoGallery = () => {
  return (
    <div className={classes.FotoGallery}>
      <Gallary />
    </div>
  )
}

export default FotoGallery
