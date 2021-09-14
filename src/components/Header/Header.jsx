import React from 'react'
import {NavLink} from 'react-router-dom'

import classes from './Header.module.sass'

import MenuPC from '../UI/MenuPC/MenuPC'
import Select from '../UI/Select/Select'

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

//набор для языка
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

const Header = () => {
  return (
    <div className={classes.header}>
      <NavLink to="/" exact>
        ALEX HOTEL
      </NavLink>

      <MenuPC options={optionsMenuPC} />

      <div className={classes.number}>
        <a href="tel:+38(099) XXX XX XX">+38(099) XXX XX XX</a>
        <a href="tel:+38(067) XXX XX XX">+38(067) XXX XX XX</a>
      </div>

      <Select options={optionsSelect} />
    </div>
  )
}

export default Header
