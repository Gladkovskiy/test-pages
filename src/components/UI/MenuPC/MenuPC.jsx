import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import classes from './MenuPC.module.sass'

const MenuPC = ({options}) => {
  const initialValue = new Array(options.length).fill(false)
  const [visible, setVisible] = useState(initialValue)

  const onMouseEnterLeave = index => {
    const arr = [...visible]
    const invers = !arr[index]
    arr.splice(index, 1, invers)
    setVisible(arr)
  }

  return (
    <ul className={classes.menuPC}>
      {options.map((item, index) => (
        <li
          key={index + 'f'}
          onMouseEnter={() => onMouseEnterLeave(index)}
          onMouseLeave={() => onMouseEnterLeave(index)}
        >
          {item.subMenu ? (
            <span>{item.name}</span>
          ) : (
            <NavLink to={item.path} exact activeClassName={classes.link}>
              {item.name}
            </NavLink>
          )}

          {item.subMenu
            ? visible[index] && (
                <SubMenu
                  onMenuHandler={() => onMouseEnterLeave(index)}
                  option={item.subMenu}
                />
              )
            : null}
        </li>
      ))}
    </ul>
  )
}
export default MenuPC

const SubMenu = ({option, onMenuHandler}) => {
  return (
    <div className={classes.subMenu}>
      <ul>
        {option.map((item, index) => (
          <li key={index + 'z'} onClick={onMenuHandler}>
            <NavLink to={item.path} exact activeClassName={classes.link}>
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  )
}
