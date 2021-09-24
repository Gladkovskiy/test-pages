import React, {useState, useContext} from 'react'
import classes from './Layout.module.sass'
import {bg} from '../../img/importImage'

import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import PopupBooking from '../../components/PopupBooking/PopupBooking'
import {globalStateContext} from '../../context/GlobalState'
import BgFaster from '../../components/UI/BgFaster/BgFaster'

const Layout = ({children}) => {
  const [openBooking, setOpenBooking] = useState(false)
  const {bgNumber} = useContext(globalStateContext)

  return (
    <div className={classes.layout}>
      <BgFaster src={bg[bgNumber]} alt={bgNumber} />
      {openBooking && (
        <PopupBooking setOpenBooking={() => setOpenBooking(!openBooking)} />
      )}
      <Header />

      {/* Тест */}
      {/* <button onClick={() => setOpenBooking(true)}>Booking</button> */}

      <div className={classes.main}>{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
