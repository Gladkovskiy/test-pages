import React from 'react'
import classes from './IconLink.module.sass'

const IconLink = ({href, icon}) => {
  const cls = [classes.IconLink, icon]
  // eslint-disable-next-line jsx-a11y/anchor-has-content
  return <a href={href} className={cls.join(' ')}></a>
}

export default IconLink
