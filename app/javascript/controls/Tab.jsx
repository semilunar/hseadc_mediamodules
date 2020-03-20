import classnames from 'classnames'
import React, { useState } from 'react'
import TabControls from './TabControls'

const Tab = ({ title, link, handleTab, current, n, position }) => {
  const [newTitle, setNewTitle] = useState(title)

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
      <textarea
        className="Tab-title"
        value={newTitle}
        rows="2"
        placeholder="What’s inside?"
        onChange={e => setNewTitle(e.target.value)}
        type="text"
      ></textarea>

      <div className="container-link-preview">
        <div className="icon-link-preview" />
        <a className="Tab-link-preview">{link}</a>
      </div>

      <TabControls position={position} />
    </div>
  )
}

export default Tab
