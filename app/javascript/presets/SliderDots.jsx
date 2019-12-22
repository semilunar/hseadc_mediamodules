import React from 'react'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import MagicSliderDots from 'react-magic-slider-dots'

import Slider1 from '../../assets/images/slider1.jpg'
import Slider2 from '../../assets/images/slider2.jpg'
import Slider3 from '../../assets/images/slider3.jpg'

export default class SliderDots extends React.Component {
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

    return (
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
    )
  }
}
