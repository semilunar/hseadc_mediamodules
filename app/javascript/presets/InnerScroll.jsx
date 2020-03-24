import React from 'react'

import Img1 from '../../assets/images/scroll1.jpg'
import Img2 from '../../assets/images/scroll2.jpg'
import Img3 from '../../assets/images/scroll3.jpg'
import Img4 from '../../assets/images/scroll4.jpg'

const url = 'http://localhost:3000'
const csrfToken = document.querySelector("[name='csrf-token']").content

export default class InnerScroll extends React.Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()
    this.state = {
      activeImg: Img1,
      imgList: [Img1, Img2, Img3, Img4],
      scrollTop: 0,
      hover: false,
      kind: 'InnerScroll'
    }

    this.handleScroll = this.handleScroll.bind(this)
    this.hoverToggle = this.hoverToggle.bind(this)
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
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
        this.setState({ images })
      })
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll(event) {
    let { hover, activeImg, imgList } = this.state
    let height = window.screen.height
    if (hover) {
      const scrollY = window.scrollY
      const scrollTop = this.myRef.current.scrollTop
      // console.log(
      //   `handleScroll, window.scrollY: ${scrollY}, imgList.length: ${imgList.length}, height: ${height}, myRef.scrollTop: ${scrollTop}`
      // )
      // console.log('REZ: ', scrollTop % height)
      // activeImg = imgList[i]
      // console.log(Math.round(scrollY / (scrollY / imgList.length)));

      this.setState({
        scrollTop: scrollTop,
        activeImg,
        imgList
      })
      // console.log("the scroll things", event.target);
    }
  }

  onScroll = () => {
    let { hover, activeImg, imgList } = this.state
    let height = window.screen.height
    let lastIdx = imgList.length - 1
    if (hover) {
      // if (activeImg !== imgList[lastIdx]) {
      const scrollY = window.scrollY
      const scrollTop = this.myRef.current.scrollTop
      // console.log(
      //   `handleScroll, window.scrollY: ${scrollY}, imgList.length: ${imgList.length}, height: ${height}, myRef.scrollTop: ${scrollTop}`
      // );
      let i = Math.round(scrollTop / 600)
      // console.log("REZ: ", Math.round(scrollTop / 567));
      // activeImg = imgList[i]
      // console.log(Math.round(scrollY / (scrollY / imgList.length)));

      this.setState({
        scrollTop: scrollTop,
        activeImg: imgList[i],
        imgList
      })
      // console.log("the scroll things", event.target);
    }
    // }
  }

  hoverToggle() {
    let { hover } = this.state
    hover = !hover
    this.setState({
      hover: hover
    })
    // console.log('Hover!', hover)
  }

  render() {
    const { scrollTop, activeImg } = this.state
    return (
      <div className="Preset">
        <div
          className="scroll"
          style={{
            'background-image': `url(${activeImg})`
          }}
          // onMouseEnter={() => this.handleScroll()}
          // onMouseLeave={() => this.handleScroll()}
          onMouseEnter={() => this.hoverToggle()}
          onMouseLeave={() => this.hoverToggle()}
          onScroll={this.onScroll}
          ref={this.myRef}
        >
          <div className="pics one"></div>
          <div className="pics two"></div>
          <div className="pics three"></div>
        </div>
      </div>
    )
  }
}
