import React, { Component } from 'react'

import LinkUploader from './LinkUploader'

const url = 'http://localhost:3000'
const csrfToken = document.querySelector("[name='csrf-token']").content

export default class TabControls extends Component {
  constructor(props) {
    super(props)

    this.fileUpload = React.createRef()
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

  handleClick = () => {
    console.log(this.fileUpload)
    this.fileUpload.click()
  }

  render() {
    const { position, handleDeleteTab, changeTabPreview } = this.props
    const { displayLinkUploader } = this.state
    return (
      <div className="tab-controls">
        <input
          ref={this.fileUpload}
          // ref={input => (this.fileUpload = input)}
          className="icon img-upload-control"
          type="file"
          name="file"
          id={`file-${position}`}
          onChange={this.handleImgUp}
        />
        <label htmlFor={`file-${position}`} onClick={this.handleClick}></label>
        <div className="icon" onClick={() => this.toggleLinkUploader(true)}>
          <div className="icon-vector link-upload-control"></div>
        </div>
        {displayLinkUploader && (
          <LinkUploader
            endpoint="newlink"
            changePreview={changeTabPreview}
            position={position}
            toggleLinkUploader={this.toggleLinkUploader}
          />
        )}
        <div className="icon">
          <div
            className="icon-vector delete-control"
            onClick={() => handleDeleteTab(position)}
          ></div>
        </div>
      </div>
    )
  }
}

// <div
//   style={{ background: 'blue', width: 30, height: 30 }}
//   onClick={this.handleClick}
// >
