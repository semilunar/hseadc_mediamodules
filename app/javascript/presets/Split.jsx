import React from 'react'

export default class Split extends React.Component {
  render() {
    return (
      <div className="Preset">
        <section className="Split">
          <div className="Split-half left">
            <a className="Split-link">Книга</a>
          </div>
          <div className="Split-half right">
            <a className="Split-link right">Постеры</a>
          </div>
        </section>
      </div>
    )
  }
}
