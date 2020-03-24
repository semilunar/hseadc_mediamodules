import React from 'react'
import ReactPlayer from 'react-player'

import ButtonSet from '../controls/ButtonSet'
import LinkUploader from '../controls/LinkUploader'

const url = 'http://localhost:3000'
const csrfToken = document.querySelector("[name='csrf-token']").content

export default class VideoMask extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mask: null,
      link: null,
      displayLinkUploader: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    fetch(`${url}/videomask`, {
      method: 'GET',
      headers: {
        'X-CSRF-Token': csrfToken,
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(parsed => {
        const mask = parsed.mask.link
        const link = parsed.video.link

        this.setState({ mask, link })
      })
      .catch(e => console.log(e))
  }

  setMask = mask => {
    fetch(`${url}/setmask`, {
      method: 'POST',
      headers: {
        'X-CSRF-Token': csrfToken,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ mask })
    })
  }

  handleClick(option) {
    this.setMask(option)
    this.setState({ mask: option })
  }

  toggleLinkUploader = bool => {
    this.setState({ displayLinkUploader: bool })
  }

  setLink = (a, link) => {
    this.setState({ link })
  }

  render() {
    const { mask, handleClick, displayLinkUploader, link } = this.state
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
          {link && (
            <ReactPlayer
              className={mask}
              url={link}
              playing
              loop={true}
              controls={false}
              muted={true}
              width="1150px"
              height="710px"
            />
          )}
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
            <LinkUploader
              endpoint="setvideomask"
              changePreview={this.setLink}
              toggleLinkUploader={this.toggleLinkUploader}
            />
          )}
        </div>
      </div>
    )
  }
}
