import React from 'react'

import VideoMask from '../presets/VideoMask'
import HorizontalScroll from '../presets/HorizontalScroll'
import Split from '../presets/Split'
import Flip from '../presets/Flip'
import Scroll from '../presets/Scroll'
import CustomVideo from '../presets/CustomVideo'
import SliderDots from '../presets/SliderDots'
import SliderArrows from '../presets/SliderArrows'
import SliderStory from '../presets/SliderStory'

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
        <CustomVideo />
        <Scroll />
        <SliderDots />
        <SliderArrows />
        <Split />
        <HorizontalScroll />
        <Flip />

        <SliderStory />
      </div>
    )
  }
}
