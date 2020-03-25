import React from 'react'

import TabMenu from '../presets/TabMenu'
import VideoMask from '../presets/VideoMask'
import VideoCustom from '../presets/VideoCustom'
import HorizontalScroll from '../presets/HorizontalScroll'
import InnerScroll from '../presets/InnerScroll'
import SliderDots from '../presets/SliderDots'
import SliderArrows from '../presets/SliderArrows'
import SliderStory from '../presets/SliderStory'

import ImgUploader from '../controls/ImgUploader'

// import Draggable, { DraggableCore } from 'react-draggable'
// import Symbol from '../../assets/images/symbol.svg'

export default class Page extends React.Component {
  render() {
    const dragStyle = {
      backgroundImage: `url(${Symbol}`
    }
    return (
      <div className="app">
        {/*<Draggable>
          <div className="draggable" style={dragStyle}></div>
        </Draggable>
        */}

        <TabMenu />
        <SliderStory />
        <VideoMask />
        <VideoCustom />
        <SliderDots />
        <SliderArrows />
        <InnerScroll />
        <HorizontalScroll />
      </div>
    )
  }
}
