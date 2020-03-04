import React from 'react'

import Button from '../controls/Button'

import Koinonia from '../../assets/videos/Koinonia.mp4'

export default class CustomVideo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      video: null,
      paused: false,
      playButton: true
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

  render() {
    const { paused, playButton } = this.state

    return (
      <div className="Preset CustomVideo">
        <video
          className="viewer"
          ref="video"
          autoPlay
          muted
          loop
          src={Koinonia}
          onClick={this.togglePlay}
        />
        <Button option={true} current={paused} handleClick={this.togglePlay} />
      </div>
    )
  }
}
