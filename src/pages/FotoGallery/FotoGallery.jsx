import React, {useContext, useEffect} from 'react'
import classes from './FotoGallery.module.sass'
import {globalStateContext} from '../../context/GlobalState'

import Gallary from '../../components/Gallery/Gallary'

const FotoGallery = () => {
  const {setBgNumber} = useContext(globalStateContext)
  useEffect(() => {
    setBgNumber(4)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className={classes.FotoGallery}>
      <Gallary />
    </div>
  )
}

export default FotoGallery
