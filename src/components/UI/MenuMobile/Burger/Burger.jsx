import React from 'react'
import classes from './Burger.module.sass'

const Burger = ({open, onClick}) => {
  const cls = [classes.Burger]

  if (open) {
    cls.push(classes.active)
  }

  return (
    <div className={cls.join(' ')} onClick={onClick}>
      <span></span>
    </div>
  )
}

export default Burger
