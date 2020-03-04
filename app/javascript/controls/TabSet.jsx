import React from 'react'

import Tab from './Tab'

const TabSet = props => {
  const { tabs, handleTab, current } = props
  const n = tabs.length

  const renderTabs = tabs.map((tab, i) => {
    return (
      <Tab
        n={n}
        current={current}
        title={tab.title}
        link={tab.link}
        key={i}
        handleTab={handleTab}
      />
    )
  })

  return <>{renderTabs}</>
}

export default TabSet
