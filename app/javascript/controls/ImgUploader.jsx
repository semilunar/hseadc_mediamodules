import React, { useState } from 'react'

const url = 'http://localhost:3000'
const csrfToken = document.querySelector("[name='csrf-token']").content

const ImageUploader = props => {
  const handle_up = target => {
    if (target.files && target.files[0]) {
      const formData = new FormData()
      formData.append('image', target.files[0])
      // formData.append('title', target.files[0].name)
      fetch(`${url}/newimage`, {
        credentials: 'same-origin',
        method: 'POST',
        headers: {
          'X-CSRF-Token': csrfToken,
          // 'Content-Type': 'multipart/form-data',
          // 'Content-Type': 'image/jpeg'
          'Content-Type': 'application/json'
        },
        body: formData
      })
    }
  }

  const handleRenderImg = target => {
    fetch(`${url}/renderimage.json`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log(data)
      })
  }

  return (
    <div className="ImageUploader" style={{ background: '#FFF' }}>
      <input type="file" onChange={e => handle_up(e.target)} />
      <div>
        <h1 onClick={handleRenderImg}>Get last image</h1>
        <img id="rendered" />
      </div>
    </div>
  )
}

export default ImageUploader
