import React from 'react'
import GoogleMaps from '../../components/GoogleMaps/GoogleMaps'
import classes from './Adress.module.sass'

const Adress = () => {
  return (
    <div className={classes.Adress}>
      <div className={classes.colorWrapper}>
        <GoogleMaps />
      </div>
    </div>
  )
}

export default Adress
