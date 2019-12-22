import React from 'react'

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
        <video autoPlay loop muted className={mask}>
          <source src="video.mp4" type="video/mp4" />
        </video>
        <ButtonSet set={set} value={mask} handleClick={this.handleClick} />
      </div>
    )
  }
}
