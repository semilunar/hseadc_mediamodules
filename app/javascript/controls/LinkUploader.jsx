import React, { useState } from 'react'

import Button from './Button'

const url = 'http://localhost:3000'
const csrfToken = document.querySelector("[name='csrf-token']").content

const LinkUploader = ({ toggleLinkUploader, changeTabPreview, position }) => {
  const [link, setLink] = useState('')

  const linkSubmit = () => {
    fetch(`${url}/newlink`, {
      credentials: 'same-origin',
      method: 'POST',
      headers: {
        'X-CSRF-Token': csrfToken,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ position, link })
    })
      .then(res => res.json())
      .then(data => {
        const url = data.link.link
        changeTabPreview('iframe', url)
        toggleLinkUploader(false)
      })
  }

  const handleClick = e => {
    e.stopPropagation()
  }

  return (
    <div
      className="link-uploader-darken"
      onClick={() => toggleLinkUploader(false)}
    >
      <div className="link-uploader-container" onClick={handleClick}>
        <div className="header">
          <h2>Add link</h2>
          <div className="cross" onClick={() => toggleLinkUploader(false)} />
        </div>
        <input
          className=""
          type="text"
          placeholder="Paste any url..."
          onChange={e => setLink(e.target.value)}
        />
        <Button
          custClass="Button-submit"
          option={true}
          current={!!link}
          handleClick={linkSubmit}
          value="Save changes"
        />
      </div>
    </div>
  )
}

export default LinkUploader
