import React from 'react'
import classes from './Main.module.sass'
import {Link} from 'react-router-dom'

import ImageFadeSlider from '../../components/UI/ImageFadeSlider/ImageFadeSlider'
import {mainImage} from '../../img/importImage'

const Main = () => {
  return (
    <div className={classes.Main}>
      <div className={classes.full}>
        <ImageFadeSlider
          width="100%"
          slideItem={mainImage}
          arrows={false}
          pauseOnHover={false}
          easing="ease-in-out"
          transitionDuration={2000}
        />
      </div>
      <div className={classes.description}>
        <div className={classes.descriptionHotel}>
          <h1>Мы очень рады открыть для Вас двери в ALEX Hotel !</h1>
          <p>
            Небольшой уютный Отель в центре частного сектора города Краматорска.
            К услугам гостей пять номеров различных категорий.
          </p>
          <p style={{fontFamily: 'medium'}}>Категорри номеров:</p>
          <ul>
            <li>Люкс: 900грн</li>
            <li>Улучшенный: 800 грн</li>
            <li>Стандарт: 700грн</li>
          </ul>
          <p>
            Каждый из номеров имеет спальню и ванную комнату. В ванной комнате
            имеются все необходимые аксессуары и удобства, душевая кабина,
            полотенца в наборе и тапочки. Номера меблированы двуспальной
            кроватью. Каждый номер оснащен телевизором и укомплектованы
            кондиционерами. Гостям предоставляется стиральная машина, гладильные
            принадлежности и фен. {'    '}
            <Link to="/rooms">Подробнее</Link>
          </p>

          <p>
            Для комфортабельного проживания гостей предусмотрен бесплатный Wi-Fi
            и закрытая парковка.
          </p>
          <p>
            К услугам постояльцев и гостей нашего отеля две современно
            оборудованные сауны с бассейном. {'  '}
            <Link to="/sauna">Подробнее</Link>
          </p>
          <ul>
            <li>
              Большая сауна + бассейн: до 8 чел. - 300 грн/час (больше 8 чел.
              350грн/час)
            </li>
            <li>
              Маленька сауна: до 6 чел. 250 грн/час (больше 6 чел. 300грн/час)
            </li>
            <li>Заказ не менее 2 часов</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Main
