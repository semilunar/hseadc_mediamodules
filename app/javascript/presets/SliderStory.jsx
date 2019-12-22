import React from 'react'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import MagicSliderDots from 'react-magic-slider-dots'

import Story1 from '../../assets/images/story1.png'
import Story2 from '../../assets/images/story2.png'
import Story3 from '../../assets/images/story3.png'
import Story4 from '../../assets/images/story4.png'

export default class SliderStory extends React.Component {
  render() {
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

    return (
      <div className="Preset Slider Story">
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
    )
  }
}
