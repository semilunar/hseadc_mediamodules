import React, { useState } from 'react'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import MagicSliderDots from 'react-magic-slider-dots'

import Story1 from '../../assets/images/story1.png'
import Story2 from '../../assets/images/story2.png'
import Story3 from '../../assets/images/story1.png'
import Story4 from '../../assets/images/story2.png'

// const colorArray = ['#121212', '#00ff29', '#fff']
const colorArray = ['', 'green', 'white']

const SliderStory = props => {
  const [colorIndex, setColorIndex] = useState(0)
  const settingsStory = {
    dots: true,
    arrows: true,
    infinite: false,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: dots => {
      return <MagicSliderDots dots={dots} numDotsToShow={5} dotWidth={30} />
    }
  }

  const hangleBg = e => {
    const numColors = colorArray.length
    setColorIndex((colorIndex + 1) % numColors)
  }

  return (
    <div className={`Preset Slider Story ${colorArray[colorIndex]}`}>
      <div
        className="Story-container"
        // style={{ background: colorArray[colorIndex] }}
      >
        <div className="tools">
          <div className="icons">
            <div className="icon">
              <div className="icon-vector delete-control"></div>
            </div>
            <div className="icon" onClick={hangleBg}>
              <div className="icon-vector icon-change-bg"></div>
            </div>
          </div>
          <div className="line"></div>
        </div>
        <Slider {...settingsStory}>
          <div>
            <img src={Story1} className="slider-img" />
          </div>
          <div>
            <img src={Story2} className="slider-img" />
          </div>
          <div>
            <img src={Story3} className="slider-img" />
          </div>
          <div>
            <img src={Story4} className="slider-img" />
          </div>
        </Slider>
      </div>
    </div>
  )
}

export default SliderStory
