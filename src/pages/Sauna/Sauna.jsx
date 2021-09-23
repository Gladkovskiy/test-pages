import React, {useState} from 'react'
import classes from './Sauna.module.sass'

import ImageSlider from '../../components/UI/ImageSlider/ImageSlider'
import TextTabElement from '../../components/UI/TextTabElement/TextTabElement'
import Tabs from '../../components/UI/Tabs/Tabs'

import {bigSauna, smallSauna} from '../../img/importImage'

const slideItem = [bigSauna, smallSauna]
const textTabElementItem = [
  {
    sauna:
      'Сауна — это «баня» по-фински. Современные сауны могут не иметь источника нагрева с помощью дров, а значит, практически, пожаробезопасны. В качестве нагревательного элемента используются инфракрасные элементы, которые нагревают не воздух в помещении, а, непосредственно, тело человека.',
  },
  {
    sauna:
      'Сауна — это «баня» по-фински. Современные сауны могут не иметь источника нагрева с помощью дров, а значит, практически, пожаробезопасны. В качестве нагревательного элемента используются инфракрасные элементы, которые нагревают не воздух в помещении, а, непосредственно, тело человека.',
  },
]
const tabNames = ['Большая сауна + бассейн', 'Маленькая сауна']

const Sauna = () => {
  const [tabsContent, setTabsContent] = useState(0)

  const tabsContentRender = index => (
    <>
      <ImageSlider slideItem={slideItem[index]} height={'50rem'} />
      <TextTabElement room={textTabElementItem[index].sauna} />
    </>
  )

  return (
    <div className={classes.Sauna}>
      <div className={classes.colorWrapper}>
        <Tabs
          onClick={setTabsContent}
          activeTab={tabsContent}
          tabNames={tabNames}
        >
          {tabsContentRender(tabsContent)}
        </Tabs>
      </div>
    </div>
  )
}

export default Sauna
