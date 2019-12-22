import React from 'react'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Slider4 from '../../assets/images/slider4.jpg'
import Slider5 from '../../assets/images/slider5.jpg'
import Slider6 from '../../assets/images/slider6.jpg'
import Slider7 from '../../assets/images/slider7.jpg'
import Slider8 from '../../assets/images/slider8.jpg'

export default class SliderArrows extends React.Component {
  render() {
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

    return (
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
    )
  }
}
