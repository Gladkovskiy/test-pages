import React, {useContext, useEffect} from 'react'
import classes from './AboutUs.module.sass'
import {globalStateContext} from '../../context/GlobalState'

const AboutUs = () => {
  const {setBgNumber} = useContext(globalStateContext)
  useEffect(() => {
    setBgNumber(1)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className={classes.AboutUs}>
      <div className={classes.colorWrapper}>
        <h2>О НАС</h2>

        <p>
          Небольшой уютный Отель в центре частного сектора города Краматорска. К
          услугам гостей пять номеров различных категорий.
        </p>

        <p>
          Каждый из номеров имеет спальню и ванную комнату. В ванной комнате
          имеются все необходимые аксессуары и удобства, душевая кабина,
          полотенца в наборе и тапочки. Номера меблированы двуспальной кроватью.
          Каждый номер оснащен телевизором и укомплектованы кондиционерами.
          Гостям предоставляется стиральная машина, гладильные принадлежности и
          фен.
        </p>

        <p>
          Для комфортабельного проживания гостей предусмотрен бесплатный Wi-Fi и
          закрытая парковка. К услугам постояльцев и гостей нашего отеля две
          современно оборудованные сауны с бассейном.
        </p>
      </div>
    </div>
  )
}

export default AboutUs
