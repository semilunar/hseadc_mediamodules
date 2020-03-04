import classnames from 'classnames'
import React from 'react'

const Tab = props => {
  const { title, link, handleTab, current, n } = props

  const classes = classnames({
    ['Split-block']: true,
    active: title === current
  })

  return (
    <div
      className={classes}
      style={{ height: `calc(100% / ${n} - 1px)` }}
      onClick={() => handleTab(link, title)}
    >
      <a className="Split-link">{title}</a>
    </div>
  )
}

export default Tab
