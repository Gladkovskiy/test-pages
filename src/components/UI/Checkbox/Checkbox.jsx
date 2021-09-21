import React from 'react'
import classes from './Checkbox.module.sass'

const Checkbox = ({label, value, onChange}) => {
  const htmlFor = Math.random().toString()

  return (
    <div className={classes.Checkbox}>
      <input type="checkbox" value={value} id={htmlFor} onChange={onChange} />
      <label htmlFor={htmlFor}>{label}</label>
    </div>
  )
}

export default Checkbox
