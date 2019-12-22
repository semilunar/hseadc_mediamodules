import React from 'react'

import VideoMask from '../presets/VideoMask'
import HorizontalScroll from '../presets/HorizontalScroll'
import Split from '../presets/Split'
import Flip from '../presets/Flip'
import Draggable, { DraggableCore } from 'react-draggable'
import Symbol from '../../assets/images/symbol.svg'

export default class Page extends React.Component {
  render() {
    const dragStyle = {
      backgroundImage: `url(${Symbol}`
    }
    return (
      <div className="app">
        <Draggable>
          <div className="draggable" style={dragStyle}></div>
        </Draggable>
        <VideoMask />
        <HorizontalScroll />
        <Split />
        <Flip />
      </div>
    )
  }
}
