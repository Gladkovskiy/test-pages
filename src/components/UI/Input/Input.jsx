import React from 'react'
import classes from './Input.module.sass'

function isInvalid({valid, touched, shouldValidate}) {
  return !valid && shouldValidate && touched
}

const Input = ({
  type,
  label,
  value,
  onChange,
  errorMessage,
  valid,
  touched,
  shouldValidate,
}) => {
  const validation = {valid, touched, shouldValidate}
  const inputType = type || 'text'
  const cls = [classes.Input]
  const htmlFor = `${inputType}-${Math.random()}`

  if (isInvalid(validation)) {
    cls.push(classes.invalid)
  }

  return (
    <div className={cls.join(' ')}>
      <label htmlFor={htmlFor}>{label}</label>
      <input
        type={inputType}
        id={htmlFor}
        value={value}
        onChange={onChange}
        spellCheck="false"
      />
      {isInvalid(validation) ? (
        <span>{errorMessage || 'Введите верное значение'}</span>
      ) : null}
    </div>
  )
}

export default Input
