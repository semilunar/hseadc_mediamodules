import React from 'react'

import VideoMask from '../presets/VideoMask'
import HorizontalScroll from '../presets/HorizontalScroll'
import Split from '../presets/Split'
import Flip from '../presets/Flip'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MagicSliderDots from 'react-magic-slider-dots'

import Draggable, { DraggableCore } from 'react-draggable'

import Symbol from '../../assets/images/symbol.svg'
import Slider1 from '../../assets/images/slider1.jpg'
import Slider2 from '../../assets/images/slider2.jpg'
import Slider3 from '../../assets/images/slider3.jpg'
import Slider4 from '../../assets/images/slider4.jpg'
import Slider5 from '../../assets/images/slider5.jpg'
import Slider6 from '../../assets/images/slider6.jpg'
import Slider7 from '../../assets/images/slider7.jpg'
import Slider8 from '../../assets/images/slider8.jpg'

export default class Page extends React.Component {
  render() {
    const settingsDots = {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      appendDots: dots => {
        return <MagicSliderDots dots={dots} numDotsToShow={3} dotWidth={30} />
      }
    }
    const settingsArrows = {
      dots: false,
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      appendDots: dots => {
        return <MagicSliderDots dots={dots} numDotsToShow={3} dotWidth={30} />
      }
    }

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

        <div className="Preset Slider Dots">
          <Slider {...settingsDots}>
            <div>
              <img src={Slider1} className="slider-img" />
            </div>
            <div>
              <img src={Slider2} className="slider-img" />
            </div>
            <div>
              <img src={Slider3} className="slider-img" />
            </div>
          </Slider>
        </div>

        <div className="Preset Slider Arrows">
          <Slider {...settingsArrows}>
            <div>
              <img src={Slider4} className="slider-img" />
            </div>
            <div>
              <img src={Slider5} className="slider-img" />
            </div>
            <div>
              <img src={Slider6} className="slider-img" />
            </div>
            <div>
              <img src={Slider7} className="slider-img" />
            </div>
            <div>
              <img src={Slider8} className="slider-img" />
            </div>
          </Slider>
        </div>
      </div>
    )
  }
}
