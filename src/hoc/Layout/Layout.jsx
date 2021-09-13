import React from 'react'
import Header from '../../components/Header/Header'
import classes from './Layout.module.sass'

const Layout = ({children}) => {
  return (
    <div className={classes.layout}>
      <Header />
      <div className={classes.main}>{children}</div>
    </div>
  )
}

export default Layout
