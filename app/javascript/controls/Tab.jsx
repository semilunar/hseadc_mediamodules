import classnames from 'classnames'
import React from 'react'
import TabControls from './TabControls'

const Tab = ({ title, link, handleTab, current, n, position }) => {
  const classes = classnames({
    ['Tab-block']: true,
    active: title === current
  })

  return (
    <div
      className={classes}
      style={{ height: `calc(100% / ${n} - 1px)` }}
      onClick={() => handleTab(link, title)}
    >
      <a className="Tab-title">{title}</a>
      <TabControls position={position} />
    </div>
  )
}

export default Tab
