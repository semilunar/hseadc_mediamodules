import classnames from 'classnames'
import React, { useState } from 'react'
import TabControls from './TabControls'

const Tab = ({
  title,
  link,
  handleTab,
  current,
  n,
  position,
  changeTabPreview,
  handleNewTitle,
  handleDeleteTab
}) => {
  const [newTitle, setNewTitle] = useState(title)

  const classes = classnames({
    ['Tab-block']: true,
    active: position === current
  })

  const clickTab = e => {
    // e.stopPropagation()
    e.preventDefault()

    handleTab(link, position)
  }

  return (
    <div
      className={classes}
      style={{ height: `calc(100% / ${n} - 1px)` }}
      onClick={clickTab}
    >
      <textarea
        className="Tab-title"
        value={newTitle || ''}
        rows="2"
        placeholder="What’s inside?"
        onChange={e => setNewTitle(e.target.value)}
        type="text"
        onBlur={() => handleNewTitle(newTitle, position)}
      ></textarea>

      <div className="container-link-preview">
        <div className="icon-link-preview" />
        <a className="Tab-link-preview">{link}</a>
      </div>

      <TabControls
        changeTabPreview={changeTabPreview}
        position={position}
        handleDeleteTab={handleDeleteTab}
      />
    </div>
  )
}

export default Tab
