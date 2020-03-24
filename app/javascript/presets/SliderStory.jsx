import React, { Component } from 'react'

import SliderUploader from '../controls/SliderUploader'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import MagicSliderDots from 'react-magic-slider-dots'

import Story1 from '../../assets/images/story1.png'
import Story2 from '../../assets/images/story2.png'
import Story3 from '../../assets/images/story1.png'
import Story4 from '../../assets/images/story2.png'

const test = [
  '../../assets/images/story1.png',
  '../../assets/images/story2.png',
  '../../assets/images/story1.png',
  '../../assets/images/story2.png'
]

const url = 'http://localhost:3000'
const csrfToken = document.querySelector("[name='csrf-token']").content

import Placeholder from '../../assets/images/slide-placeholder.png'

const colorArray = ['', 'green', 'white']

export default class SliderStory extends Component {
  constructor(props) {
    super(props)

    this.state = {
      images: null,
      current: null,
      colorIndex: null,
      blankIndex: false,
      showUploader: true,
      showSlider: true,
      kind: 'SliderStory'
    }
  }

  componentWillMount() {
    const { kind } = this.state
    fetch(`${url}/getsliderimg`, {
      method: 'POST',
      headers: {
        'X-CSRF-Token': csrfToken,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ kind })
    })
      .then(res => res.json())
      .then(data => {
        const images = data.slides
          .sort((a, b) => a.position - b.position)
          .map(slide => {
            return { link: slide.link.url }
            // return (
            //   <div>
            //     <img src={slide.link.url} className="slider-img" />
            //   </div>
            // )
          })
          .slice(2)
        this.setState({ images })
      })
  }

  componentDidMount() {
    setTimeout(() => this.dotResize(), 1500)
  }

  hangleBg = e => {
    const { colorIndex } = this.state
    const numColors = colorArray.length
    this.setState({ colorIndex: (colorIndex + 1) % numColors })
  }

  handleUpload = (url, position) => {
    let { images } = this.state

    if (images) {
      images[position] = (
        <div>
          <img src={url} className="slider-img" />
        </div>
      )
    } else {
      images = [
        <div>
          <img src={url} className="slider-img" />
        </div>
      ]
    }
    this.setState({ images, showSlider: false })
    setTimeout(() => this.setState({ showSlider: true }), 2000)
  }

  toggleUploader = bool => {
    this.setState({ showUploader: bool })
  }

  dotResize = () => {
    const ul = document.querySelector(
      '.Story .Story-container .slick-slider .magic-dots ul'
    )
    const contWidth = ul.offsetWidth
    const n = ul.children.length
    let liW = contWidth / n - 6 * (n - 1)
    for (let li of ul.children) {
      li.style.width = `${liW}px`
    }
  }

  handleBeforeChange = (current, next) => {
    const { images, blankIndex } = this.state
    this.setState({ current: next })

    // if (next === images.length - 1 && )// console.log(current, next)

    // if (current === images.length) {
    //   images.push(
    // <div>
    //   <img src={Placeholder} className="slider-img" />
    // </div>
    //   )
    // }
  }

  handleAfterChange = current => {
    const { images, blankIndex } = this.state
    if (current === images.length - 1 && !blankIndex) {
      images.push(
        <div>
          <img src={Placeholder} className="slider-img" />
        </div>
      )
    }

    this.setState({ images, blankIndex: current + 1 })
    this.dotResize()
  }

  render() {
    const {
      colorIndex,
      images,
      current,
      needBlank,
      showUploader,
      kind,
      showSlider
    } = this.state

    const settingsStory = {
      dots: true,
      arrows: true,
      infinite: false,
      speed: 600,
      slidesToShow: 1,
      beforeChange: this.handleBeforeChange,
      afterChange: this.handleAfterChange,
      slidesToScroll: 1,
      appendDots: dots => {
        return <MagicSliderDots dots={dots} numDotsToShow={5} dotWidth={30} />
      }
    }

    const imgToShow = images
      ? images.map(img => (
          <div>
            <img src={img.link} className="slider-img" />
          </div>
        ))
      : null

    return (
      <div className={`Preset Slider Story ${colorArray[colorIndex]}`}>
        <div className="Story-container">
          <div className="tools">
            <div className="icons">
              <div className="icon">
                <div className="icon-vector delete-control"></div>
              </div>
              <div className="icon" onClick={this.hangleBg}>
                <div className="icon-vector icon-change-bg"></div>
              </div>
            </div>
            <div className="line"></div>
          </div>
          {showSlider && (
            <Slider {...settingsStory}>
              {imgToShow ? (
                imgToShow
              ) : (
                <div>
                  <img src={Placeholder} className="slider-img" />
                </div>
              )}
            </Slider>
          )}
          {showUploader && (
            <SliderUploader
              position={images ? images.length : 0}
              handleUpload={this.handleUpload}
              endpoint="newsliderimg"
              kind={kind}
            />
          )}
        </div>
      </div>
    )
  }
}
