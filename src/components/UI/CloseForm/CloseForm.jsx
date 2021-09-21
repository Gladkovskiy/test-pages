import React from 'react'
import classes from './CloseForm.module.sass'

const CloseForm = ({onClick}) => {
  return (
    <div className={classes.CloseForm} onClick={onClick}>
      &times;
    </div>
  )
}

export default CloseForm
