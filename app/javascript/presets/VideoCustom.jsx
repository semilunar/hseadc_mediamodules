import React from 'react'

import Button from '../controls/Button'
import LinkUploader from '../controls/LinkUploader'

import Koinonia from '../../assets/videos/Koinonia.mp4'

export default class VideoCustom extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      video: null,
      paused: false,
      playButton: true,
      displayLinkUploader: false
    }

    this.togglePlay = this.togglePlay.bind(this)
  }

  componentDidMount() {
    this.setState(
      {
        video: this.refs.video
      },
      () => {
        ;['pause', 'play'].forEach(event => {
          this.state.video.addEventListener(event, () => {
            this.forceUpdate()
          })
        })
      }
    )
  }

  togglePlay() {
    const { video, paused } = this.state
    const method = video.paused ? 'play' : 'pause'
    video[method]()
    console.log(paused)
    this.setState({
      video,
      paused: !paused
    })
  }

  toggleLinkUploader = bool => {
    this.setState({ displayLinkUploader: bool })
  }

  render() {
    const { paused, playButton, displayLinkUploader } = this.state

    return (
      <div className="Preset VideoCustom">
        <div className="Preset-container">
          <video
            className="viewer"
            ref="video"
            autoPlay
            muted
            loop
            src={Koinonia}
            onClick={this.togglePlay}
          />

          <Button
            custClass="Button-play"
            option={true}
            current={paused}
            handleClick={this.togglePlay}
          />

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
