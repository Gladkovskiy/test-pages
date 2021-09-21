import React from 'react'
import classes from './Backdrop.module.sass'

const Backdrop = ({onClick}) => {
  return <div className={classes.Backdrop} onClick={onClick}></div>
}

export default Backdrop
