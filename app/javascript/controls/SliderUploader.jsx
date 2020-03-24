import React, { Component } from 'react'

import LinkUploader from './LinkUploader'

const url = 'http://localhost:3000'
const csrfToken = document.querySelector("[name='csrf-token']").content

const SliderUploader = ({ position, handleUpload, endpoint, kind }) => {
  const handleImgUp = e => {
    e.preventDefault()
    e.stopPropagation()
    if (e.target.files && e.target.files[0]) {
      const formData = new FormData()
      formData.append('image', e.target.files[0])
      formData.append('position', position)
      formData.append('kind', kind)
      fetch(`${url}/${endpoint}`, {
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
          const url = data.slide.link.url
          handleUpload(url, position)
        })
    }
  }

  return (
    <div className="slider-uploader-container">
      <input
        className="icon img-upload-control"
        type="file"
        name="file"
        id={`file-${position}`}
        onChange={handleImgUp}
      />
      <label htmlFor={`file-${position}`}></label>
    </div>
  )
}

export default SliderUploader

// <div
//   style={{ background: 'blue', width: 30, height: 30 }}
//   onClick={this.handleClick}
// >
