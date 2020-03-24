import React from 'react'

import Tab from './Tab'

const TabSet = props => {
  const {
    tabs,
    handleTab,
    current,
    changeTabPreview,
    handleNewTitle,
    handleDeleteTab
  } = props
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
        handleNewTitle={handleNewTitle}
        handleTab={handleTab}
        handleDeleteTab={handleDeleteTab}
      />
    )
  })

  return <>{renderTabs}</>
}

export default TabSet
