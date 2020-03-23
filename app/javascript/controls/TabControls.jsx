import React, { Component } from 'react'

import LinkUploader from './LinkUploader'

const url = 'http://localhost:3000'
const csrfToken = document.querySelector("[name='csrf-token']").content

export default class TabControls extends Component {
  constructor(props) {
    super(props)

    this.state = { displayLinkUploader: false }
  }

  handleImgUp = e => {
    e.preventDefault()
    e.stopPropagation()
    const { position } = this.props
    if (e.target.files && e.target.files[0]) {
      const formData = new FormData()
      formData.append('image', e.target.files[0])
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
          const url = data.img.link.url
          this.props.changeTabPreview('img', url)
          // const imgContainer = document.getElementById('tab-img-preview')
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
          onChange={e => this.handleImgUp(e)}
        />
        <label for="file"></label>
        <div className="icon" onClick={() => this.toggleLinkUploader(true)}>
          <div className="icon-vector link-upload-control"></div>
        </div>
        {displayLinkUploader && (
          <LinkUploader
            changeTabPreview={this.props.changeTabPreview}
            position={position}
            toggleLinkUploader={this.toggleLinkUploader}
          />
        )}
        <div className="icon">
          <div className="icon-vector delete-control"></div>
        </div>
      </div>
    )
  }
}
