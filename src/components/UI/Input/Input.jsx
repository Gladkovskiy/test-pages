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
  focuse,
  onFocusChangeLabel = null,
  onBlurChangeLabel = null,
}) => {
  const validation = {valid, touched, shouldValidate}
  const inputType = type || 'text'
  const cls = [classes.Input]
  const htmlFor = `${inputType}-${Math.random()}`

  if (isInvalid(validation)) {
    cls.push(classes.invalid)
  }

  if (valid && touched) {
    cls.push(classes.valid)
  }

  let clsLabel = [classes.label, classes.labelMaterialUI]

  if (focuse || value.trim().length !== 0) {
    clsLabel.push(classes.labelMaterialUI_active)
  } else {
    if (value.trim().length === 0) {
      clsLabel = clsLabel.filter(
        item => item !== classes.labelMaterialUI_active
      )
    }
  }

  return (
    <div className={cls.join(' ')}>
      <div>
        <label htmlFor={htmlFor} className={clsLabel.join(' ')}>
          {label}
        </label>
        <input
          type={inputType}
          id={htmlFor}
          value={value}
          onChange={onChange}
          onFocus={onFocusChangeLabel}
          onBlur={onBlurChangeLabel}
          spellCheck="false"
        />
      </div>
      {isInvalid(validation) ? (
        <span>{errorMessage || 'Введите верное значение'}</span>
      ) : null}
    </div>
  )
}

export default Input
