import React from 'react'

export default class VideoDarkenWithTitle extends React.Component {
  constructor(props) {
    super(props)
    this.state = { mood: 'bad', url: 'fb.com' }
  }

  render() {
    return (
      <div className="Preset VideoDarkenWithTitle">
        <h1>video darken hahhahah is {this.state.mood}</h1>
        <video autoPlay loop muted>
          // <div className="darken"></div>
          <source
            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    )
  }
}
