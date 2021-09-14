/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import classes from './Footer.module.sass'

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.social}>
        <a
          href="https://www.facebook.com/"
          className="icon-face"
          target="_blank"
          rel="noreferrer"
        />
        <a
          href="https://www.instagram.com/"
          className="icon-inst"
          target="_blank"
          rel="noreferrer"
        />
      </div>
      <div className={classes.phone}>
        <span className="icon-phone" />
        <div>
          <div>38(099) xxx xx xx</div>
          <div>38(067) xxx xx xx</div>
        </div>
      </div>
      <div className={classes.adress}>
        <span className="icon-adress"></span>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ut
          quisquam
        </div>
      </div>
    </div>
  )
}

export default Footer
