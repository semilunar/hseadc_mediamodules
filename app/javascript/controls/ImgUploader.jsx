import React, { useState } from 'react'

const url = 'http://localhost:3000'
const csrfToken = document.querySelector("[name='csrf-token']").content

const ImageUploader = props => {
  const handle_up = target => {
    if (target.files && target.files[0]) {
      const formData = new FormData()
      formData.append('image', target.files[0])
      fetch(`${url}/newimage`, {
        credentials: 'same-origin',
        method: 'POST',
        headers: {
          'X-CSRF-Token': csrfToken
        },
        body: formData
      })
    }
  }

  const handleRenderImg = target => {
    fetch(`${url}/renderimage.json`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        document.getElementById('rendered').src = data.img.link.url
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
