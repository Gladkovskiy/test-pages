import React from 'react'
import classes from './Checkbox.module.sass'

const Checkbox = ({label, value, onChange}) => {
  return (
    <label className={classes.Checkbox}>
      {label}
      <input type="checkbox" value={value} onChange={onChange} />
      <span className={classes.checkMark}></span>
    </label>
  )
}

export default Checkbox
