import React, { useState } from 'react'

const TabPreview = ({ preview, displayUrl }) => {
  if (preview === 'iframe')
    return (
      <>
        {displayUrl && (
          <iframe
            src={displayUrl}
            frameborder="0"
            controls="0"
            autoplay="0"
            muted
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        )}
      </>
    )

  if (preview === 'img') return <img id="tab-img-preview" src={displayUrl} />

  return (
    <>
      <div className="tab-placeholder"></div>
    </>
  )
}

export default TabPreview
