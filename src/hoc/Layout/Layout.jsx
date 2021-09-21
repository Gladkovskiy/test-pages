import React, {useState} from 'react'
import classes from './Layout.module.sass'

import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import PopupBooking from '../../components/PopupBooking/PopupBooking'

const Layout = ({children}) => {
  const [openBooking, setOpenBooking] = useState(false)

  return (
    <div className={classes.layout}>
      {openBooking && (
        <PopupBooking setOpenBooking={() => setOpenBooking(!openBooking)} />
      )}
      <Header />

      {/* Тест */}
      <button onClick={() => setOpenBooking(true)}>Booking</button>

      <div className={classes.main}>{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
