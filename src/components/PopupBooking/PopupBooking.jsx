import React from 'react'
import classes from './PopupBooking.module.sass'

import Backdrop from '../UI/Backdrop/Backdrop'
import BookingForm from './BookinForm/BookingForm'

const PopupBooking = ({openBooking, setOpenBooking}) => {
  return (
    <div className={classes.PopupBooking}>
      <Backdrop />
      <BookingForm close={setOpenBooking} />
    </div>
  )
}

export default PopupBooking
