import React from 'react'
import ReactPlayer from 'react-player'

import ButtonSet from '../controls/ButtonSet'

export default class VideoMask extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mask: 'maskDiamond'
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(option) {
    const { mask } = this.state
    this.setState({ mask: option })
  }
  render() {
    const { mask, handleClick } = this.state
    const set = [
      'maskStar2',
      'maskStar',
      'maskDiamond',
      'maskHeart',
      'maskPolygon',
      'maskEllipse'
    ]

    return (
      <div className="Preset VideoMask">
        <ReactPlayer
          className={mask}
          url="https://vimeo.com/344429704"
          playing
          loop={true}
          controls={false}
          muted={true}
          width="1440px"
          height="885px"
        />
        <ButtonSet set={set} value={mask} handleClick={this.handleClick} />
      </div>
    )
  }
}
