import React from 'react'
import Loader from '../UI/Loader/Loader'
import classes from './GoogleMaps.module.sass'

const GoogleMaps = () => {
  const parametr = {
    src: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10529.098551041145!2d37.5828047!3d48.7193437!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3f962f59bf8c135e!2z0JPQvtGC0LXQu9GMICJBbGV4Ig!5e0!3m2!1sru!2sua!4v1632229475139!5m2!1sru!2sua',
    style: {
      width: '100%',
      height: '50rem',
      style: 'none',
    },
    allowFullScreen: '',
    loading: 'lazy',
  }
  return (
    <div className={classes.GoogleMaps}>
      <div className={classes.adress}>
        <div className={classes.adr}>
          <p>Адресс:</p>
          <p>
            Украина, <br /> Донецкая область, <br /> Краматорск, <br /> ул. Анри
            Барбюса, 127{' '}
          </p>
        </div>
        <div className={classes.tel}>
          <p>Телефон:</p>
          <p>
            +38(095)406-59-67 <br />
            +38(06264)4-08-49
          </p>
        </div>
      </div>
      <div className={classes.map}>
        <Loader position="absolute" zIndex={-1} />
        <iframe {...parametr} title="AlexHotel"></iframe>
      </div>
    </div>
  )
}

export default GoogleMaps
