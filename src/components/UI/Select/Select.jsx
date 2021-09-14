import React, {useState} from 'react'
import classes from './Select.module.sass'

const initialValue = {
  label: 'RU',
  value: 'RU',
}

const Select = ({options}) => {
  const [value, setValue] = useState(initialValue) //это должно приходит сверху (context)

  const [visible, setVisible] = useState(false)

  const clsLabel = [classes.labelSpan]

  if (visible) {
    clsLabel.push(classes.labelSpanRotate)
  }

  return (
    <div
      className={classes.select}
      onMouseEnter={() => setVisible(!visible)}
      onMouseLeave={() => setVisible(!visible)}
    >
      <div className={classes.label}>
        <div>{value.label}</div>
        <span className={clsLabel.join(' ')}>&#9660;</span>
      </div>
      {visible && (
        <div className={classes.selectList}>
          <ul>
            {options.map((item, index) => (
              <li
                onClick={() => {
                  setValue({...item})
                  setVisible(!visible)
                }}
                key={index + 'u'}
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
