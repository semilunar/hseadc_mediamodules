import React from 'react'
import ReactPlayer from 'react-player'

import ButtonSet from '../controls/ButtonSet'
import LinkUploader from '../controls/LinkUploader'

export default class VideoMask extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mask: 'maskDiamond',
      displayLinkUploader: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(option) {
    const { mask } = this.state
    this.setState({ mask: option })
  }

  toggleLinkUploader = bool => {
    this.setState({ displayLinkUploader: bool })
  }

  render() {
    const { mask, handleClick, displayLinkUploader } = this.state
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
        <div className="Preset-container">
          <ReactPlayer
            className={mask}
            url="https://vimeo.com/344429704"
            playing
            loop={true}
            controls={false}
            muted={true}
            width="1150px"
            height="710px"
          />
          <ButtonSet set={set} value={mask} handleClick={this.handleClick} />

          <div className="placeholder">
            <div className="img-placeholder" />
            <div
              className="link-upload-control"
              onClick={() => this.toggleLinkUploader(true)}
            >
              Add video<span></span>
            </div>
          </div>

          {displayLinkUploader && (
            <LinkUploader toggleLinkUploader={this.toggleLinkUploader} />
          )}
        </div>
      </div>
    )
  }
}
