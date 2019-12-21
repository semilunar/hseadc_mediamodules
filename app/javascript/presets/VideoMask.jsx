import React from 'react'

import ButtonSet from './ButtonSet'

export default class VideoMask extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mask: 'maskRombus'
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(option) {
    const { mask } = this.state
    this.setState({ mask: option })
  }
  render() {
    const { mask, handleClick } = this.state
    const set = ['maskRombus', 'maskStar', 'maskCircle', 'maskCube']

    return (
      <div className="Preset VideoMask">
        <video autoPlay loop muted className={mask}>
          <source
            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4"
            type="video/mp4"
          />
        </video>
        <ButtonSet set={set} value={mask} handleClick={this.handleClick} />
      </div>
    )
  }
}
