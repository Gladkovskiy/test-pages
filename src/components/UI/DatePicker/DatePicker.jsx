import React from 'react'
import 'react-datepicker/dist/react-datepicker.min.css'
import './datepicker.sass'
import classes from './DatePicker.module.sass'

import DatePicker, {registerLocale} from 'react-datepicker'
import {ru, uk} from 'date-fns/locale/'

registerLocale('ru', ru)
registerLocale('ua', uk)

const DatePickerElement = ({local, dateFormat, selected, onChange}) => {
  return (
    <DatePicker
      locale={local}
      className={classes.DatePickerElement}
      dateFormat={dateFormat}
      selected={selected}
      onChange={onChange}
    />
  )
}

export default DatePickerElement
