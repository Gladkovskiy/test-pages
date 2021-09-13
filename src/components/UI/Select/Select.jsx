import React, {useState} from 'react'
import classes from './Select.module.sass'

const initialValue = {
  label: 'RU',
  value: 'RU',
}

const Select = ({options}) => {
  const [value, setValue] = useState(initialValue) //это должно приходит сверху (context)

  const [visible, setVisible] = useState(false)

  return (
    <div
      className={classes.select}
      onMouseEnter={() => setVisible(!visible)}
      onMouseLeave={() => setVisible(!visible)}
    >
      {value.label}
      {visible && (
        <div className={classes.selectList}>
          <ul>
            {options.map((item, index) => (
              <li
                onClick={() => {
                  setValue({...item})
                  setVisible(!visible)
                }}
                key={index}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Select
