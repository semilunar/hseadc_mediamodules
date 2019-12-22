import React from 'react'

export default class Split extends React.Component {
  render() {
    return (
      <div className="Preset Split">
        <section className="Feature">
          <div className="Feature-block left">
            <a className="Feature-link left">Книга</a>
          </div>
          <div className="Feature-block right">
            <a className="Feature-link right">Постеры</a>
          </div>
        </section>
      </div>
    )
  }
}
