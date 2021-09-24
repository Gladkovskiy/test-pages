import React, {useContext, useEffect} from 'react'
import classes from './Adress.module.sass'
import {globalStateContext} from '../../context/GlobalState'

import GoogleMaps from '../../components/GoogleMaps/GoogleMaps'
const Adress = () => {
  const {setBgNumber} = useContext(globalStateContext)
  useEffect(() => {
    setBgNumber(5)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className={classes.Adress}>
      <div className={classes.colorWrapper}>
        <GoogleMaps />
      </div>
    </div>
  )
}

export default Adress
