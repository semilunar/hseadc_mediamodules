import React, { useState } from 'react'

const TabPreview = ({ preview, url }) => {
  const displayUrl =
    url &&
    url
      .replace('watch?v=', 'embed/')
      .replace('youtu.be', 'www.youtube.com/embed/') + '?controls=0'

  if (displayUrl) preview = displayUrl.match(/jpeg|jpg|png/) ? 'img' : 'iframe'

  if (preview === 'iframe')
    return (
      <>
        {displayUrl && (
          <iframe
            src={displayUrl}
            frameBorder="0"
            controls="0"
            autoPlay="0"
            muted
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
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
