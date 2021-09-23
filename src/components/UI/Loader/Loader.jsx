import React from 'react'
import classes from './Loader.module.sass'

const Loader = ({position = 'fixed', zIndex = 50}) => {
  return (
    <div
      className={classes.center}
      style={{position: position, zIndex: zIndex}}
    >
      <div className={classes.Loader}>
        <div />
        <div />
      </div>
    </div>
  )
}

export default Loader
