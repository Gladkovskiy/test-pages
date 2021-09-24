import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import classes from './MenuPC.module.sass'

const MenuPC = ({options}) => {
  const initialValue = new Array(options.length).fill(false)
  const [visible, setVisible] = useState(initialValue)

  //для появления сабменю
  const onMouseEnterLeave = index => {
    const arr = [...visible]
    const invers = !arr[index]
    arr.splice(index, 1, invers)
    setVisible(arr)
  }

  //для подсветки span активного
  const [activeSpan, setActiveSpan] = useState(0)

  const activeSpanClass = index => {
    const cls = [classes.Span]
    if (activeSpan === index) {
      cls.push(classes.activeSpan)
    }
    return cls.join(' ')
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
            <span className={activeSpanClass(index)}>{item.name}</span>
          ) : (
            <NavLink
              to={item.path}
              exact
              activeClassName={classes.link}
              onClick={() => setActiveSpan(0)}
            >
              {item.name}
            </NavLink>
          )}

          {item.subMenu
            ? visible[index] && (
                <SubMenu
                  onMenuHandler={() => {
                    onMouseEnterLeave(index)
                    setActiveSpan(index)
                  }}
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
