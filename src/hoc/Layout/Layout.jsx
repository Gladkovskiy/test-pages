import React from 'react'
import classes from './Layout.module.sass'

const Layout = ({children}) => {
  return (
    <div className={classes.layout}>
      <div className={classes.main}>{children}</div>
    </div>
  )
}

export default Layout
