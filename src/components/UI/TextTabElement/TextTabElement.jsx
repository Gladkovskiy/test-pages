import React from 'react'
import classes from './TextTabElement.module.sass'

const TextTabElement = ({room, bathroom}) => {
  return (
    <div className={classes.TextTabElement}>
      <div>{room}</div>
    </div>
  )
}

export default TextTabElement
