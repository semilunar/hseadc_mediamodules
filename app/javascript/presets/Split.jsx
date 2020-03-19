import React from 'react'

export default class Split extends React.Component {
  render() {
    return (
      <div className="Preset">
        <section className="Split">
          <div className="Split-half left">
            <a className="Tab-title">Книга</a>
          </div>
          <div className="Split-half right">
            <a className="Tab-title right">Постеры</a>
          </div>
        </section>
      </div>
    )
  }
}
