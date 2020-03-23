import React from 'react'

import Tab from './Tab'

const TabSet = props => {
  const { tabs, handleTab, current, changeTabPreview } = props
  const n = tabs.length

  const renderTabs = tabs.map((tab, i) => {
    return (
      <Tab
        n={n}
        position={i + 1}
        current={current}
        title={tab.title}
        link={tab.link}
        key={i}
        changeTabPreview={changeTabPreview}
        handleTab={handleTab}
      />
    )
  })

  return <>{renderTabs}</>
}

export default TabSet
