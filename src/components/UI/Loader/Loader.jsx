import React from 'react'
import classes from './Loader.module.sass'

const Loader = props => {
  return (
    <div className={classes.center}>
      <div className={classes.Loader}>
        <div />
        <div />
      </div>
    </div>
  )
}

export default Loader
