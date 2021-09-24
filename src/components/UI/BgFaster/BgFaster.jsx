import React from 'react'
import classes from './BgFaster.module.sass'

const BgFaster = ({src, alt}) => {
  return <img src={src} alt={alt} className={classes.BgFaster} />
}

export default BgFaster
