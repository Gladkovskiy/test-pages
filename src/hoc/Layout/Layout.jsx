import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import classes from './Layout.module.sass'

const Layout = ({children}) => {
  return (
    <div className={classes.layout}>
      <Header />
      <div className={classes.main}>{children}</div>
      <Footer/>
    </div>
  )
}

export default Layout
