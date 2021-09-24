import React, {useState} from 'react'
import classes from './MenuMobile.module.sass'
import {CSSTransition} from 'react-transition-group'

import Burger from './Burger/Burger'
import Drawer from './Drawer/Drawer'

const MenuMobile = ({menuOption}) => {
  const [open, setOpen] = useState(false)

  return (
    <div className={classes.MenuMobile}>
      <Burger open={open} onClick={() => setOpen(!open)} />
      <CSSTransition
        in={open}
        timeout={{enter: 1000, exit: 1000}}
        mountOnEnter
        unmountOnExit
        classNames="drawer"
      >
        <Drawer onClick={() => setOpen(!open)} menuOption={menuOption} />
      </CSSTransition>
    </div>
  )
}

export default MenuMobile
