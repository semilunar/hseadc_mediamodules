import React, { Component } from 'react'

import LinkUploader from './LinkUploader'

const url = 'http://localhost:3000'
const csrfToken = document.querySelector("[name='csrf-token']").content
const imgContainer = document.getElementById('tab-img-preview')

export default class TabControls extends Component {
  constructor(props) {
    super(props)

    this.state = { displayLinkUploader: false }
  }

  handleUp = target => {
    const { position } = this.props
    if (target.files && target.files[0]) {
      const formData = new FormData()
      formData.append('image', target.files[0])
      formData.append('position', position)
      fetch(`${url}/newimage`, {
        credentials: 'same-origin',
        method: 'POST',
        headers: {
          'X-CSRF-Token': csrfToken
          // 'Content-Type': 'application/json'
        },
        body: formData
      })
        .then(response => response.json())
        .then(data => {
          console.log(data)
          imgContainer.src = data.img.link.url
        })
    }
  }

  toggleLinkUploader = bool => {
    this.setState({ displayLinkUploader: bool })
  }

  render() {
    const { position } = this.props
    const { displayLinkUploader } = this.state
    return (
      <div className="tab-controls">
        <input
          className="icon img-upload-control"
          type="file"
          name="file"
          id="file"
          onChange={e => handleUp(e.target)}
        />
        <label for="file"></label>
        <div
          className="icon link-upload-control"
          onClick={() => this.toggleLinkUploader(true)}
        ></div>
        {displayLinkUploader && (
          <LinkUploader
            position={position}
            toggleLinkUploader={this.toggleLinkUploader}
          />
        )}
        <div className="icon delete-control"></div>
      </div>
    )
  }
}
