import React, {useContext} from 'react'
import {NavLink} from 'react-router-dom'

import classes from './Header.module.sass'
import {globalStateContext} from '../../context/GlobalState'

import MenuPC from '../UI/MenuPC/MenuPC'
import Select from '../UI/Select/Select'
import MenuMobile from '../UI/MenuMobile/MenuMobile'
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
const optionsMenuPC = [
  {
    name: 'Главная',
    path: '/',
  },
  {
    name: 'О нас',
    path: '/about',
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
]

const optionsMenuMobile = [
  {
    name: 'Главная',
    path: '/',
  },
  {
    name: 'О нас',
    path: '/about',
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

const Header = () => {
  const {isMobile} = useContext(globalStateContext)

  return (
    <div className={classes.header}>
      {isMobile && <MenuMobile menuOption={optionsMenuMobile} />}
      <NavLink to="/" exact>
        ALEX HOTEL
      </NavLink>

      {!isMobile && <MenuPC options={optionsMenuPC} />}

      <div className={classes.number}>
        <a href="tel:+38(099) XXX XX XX">+38(099) XXX XX XX</a>
        <a href="tel:+38(067) XXX XX XX">+38(067) XXX XX XX</a>
      </div>

      <div className={classes.selectLang}>
        <Select options={optionsSelect} />
      </div>
    </div>
  )
}

export default Header
