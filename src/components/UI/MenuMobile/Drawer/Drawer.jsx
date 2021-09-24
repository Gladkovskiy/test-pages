import React from 'react'
import {NavLink} from 'react-router-dom'
import classes from './Drawer.module.sass'

const Drawer = ({onClick, menuOption}) => {
  return (
    <nav className={classes.Drawer}>
      <ul>
        {menuOption.map((item, index) => (
          <li onClick={onClick} key={index}>
            <NavLink to={item.path} exact activeClassName={classes.link}>
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Drawer
