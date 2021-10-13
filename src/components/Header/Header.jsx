import React, {useContext} from 'react'
import {NavLink} from 'react-router-dom'
import {useTranslation} from 'react-i18next'

import classes from './Header.module.sass'
import {globalStateContext} from '../../context/GlobalState'

import MenuPC from '../UI/MenuPC/MenuPC'
import Select from '../UI/Select/Select'
import MenuMobile from '../UI/MenuMobile/MenuMobile'
import Button from '../UI/Button/Button'
import IconLink from '../UI/IconLink/IconLink'

//набор для языка
const optionsSelect = [
  {
    label: 'RU',
    value: 'RU',
  },
  {
    label: 'UA',
    value: 'UA',
  },
  {
    label: 'EN',
    value: 'EN',
  },
]

//набор для меню
/* const optionsMenuPC = [
  {
    name: 'Главная',
    path: '/',
  },
  {
    name: 'Комнаты и услуги',
    subMenu: [
      {name: 'Комнаты', path: '/rooms'},
      {name: 'Сауна', path: '/sauna'},
    ],
  },
  {
    name: 'Фото',
    path: '/gallery',
  },
  {
    name: 'Как нас найти?',
    path: '/adress',
  },
] */

const optionsMenuMobile = [
  {
    name: 'Главная',
    path: '/',
  },
  {
    name: 'Комнаты',
    path: '/rooms',
  },
  {
    name: 'Сауна',
    path: '/sauna',
  },
  {
    name: 'Фото',
    path: '/gallery',
  },
  {
    name: 'Как нас найти?',
    path: '/adress',
  },
]

const Header = ({booking}) => {
  const {isMobile} = useContext(globalStateContext)
  const [t, i18n] = useTranslation()

  const setLng = lng => i18n.changeLanguage(lng)

  // инициализация языка
  const initialLng = {
    label: i18n.language,
    value: i18n.language,
  }

  return (
    <div className={classes.header}>
      {isMobile && <MenuMobile menuOption={optionsMenuMobile} />}
      <NavLink to="/" exact>
        ALEX HOTEL
      </NavLink>

      {!isMobile && (
        <MenuPC options={t('header.menuPC', {returnObjects: true})} />
      )}

      <Button type="booking" onClick={booking}>
        {t('header.booking')}
      </Button>

      {!isMobile ? (
        <div className={classes.number}>
          <a href="tel:+38(099) XXX XX XX">+38(099) XXX XX XX</a>
          <a href="tel:+38(067) XXX XX XX">+38(067) XXX XX XX</a>
        </div>
      ) : (
        <IconLink href="tel:+38(099) XXX XX XX" icon="icon-phone" />
      )}

      <div className={classes.selectLang}>
        <Select
          options={optionsSelect}
          setlanguage={setLng}
          initialLng={initialLng}
        />
      </div>
    </div>
  )
}

export default Header
