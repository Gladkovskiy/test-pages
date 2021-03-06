import React from 'react'
import classes from './Tabs.module.sass'

const Tabs = ({children, onClick, activeTab, tabNames}) => {
  return (
    <div className={classes.Tabs}>
      <div
        className={classes.TabsPanel}
        style={{gridTemplateColumns: `repeat(${tabNames.length}, 1fr)`}}
      >
        {tabNames.map((item, index) => {
          const cls = [classes.TabsItem, classes.third]
          if (activeTab === index) {
            cls.push(classes.active)
          }
          return (
            <div
              className={cls.join(' ')}
              key={index}
              onClick={() => onClick(index)}
            >
              {item}
            </div>
          )
        })}
      </div>
      <div className={classes.TabsContent}>{children}</div>
    </div>
  )
}

export default Tabs
