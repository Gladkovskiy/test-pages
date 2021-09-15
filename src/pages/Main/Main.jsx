import React from 'react'
import ImageSlider from '../../components/UI/ImageSlider/ImageSlider'
import classes from './Main.module.sass'

// import slide1 from '../../img/test/1.webp'
// import slide2 from '../../img/test/3.webp'
// import slide3 from '../../img/test/4.webp'
// import slide4 from '../../img/test/5.webp'

// const slideItem = [slide1, slide2, slide3, slide4]

const Main = () => {
  return (
    <div className={classes.Main}>
      <h2>Main</h2>
      {/* <ImageSlider slideItem={slideItem} height={'40rem'} width={'70%'} /> */}
    </div>
  )
}

export default Main
