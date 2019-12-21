import React from 'react'

export default class Flip extends React.Component {
  render() {
    return (
      <div className="Preset Flip">
        <div className="scene">
          <div className="card">
            <div className="face front"></div>
            <div className="face back"></div>
          </div>
        </div>
      </div>
    )
  }
}
