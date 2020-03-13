import React from 'react'

import TabSet from '../controls/TabSet'

export default class TabMenu extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      tabs: null,
      current: null,
      url: null
    }
  }

  componentWillMount = () => {
    const url = 'http://localhost:3000'
    const csrfToken = document.querySelector("[name='csrf-token']").content
    console.log('auth.js')

    console.log('FUNCTION')
    fetch(`${url}/videotabattachment`, {
      method: 'GET',
      headers: {
        'X-CSRF-Token': csrfToken,
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(({ tabs } = parsed) => {
        const preview = tabs[0]
        this.setState({ tabs, current: preview.title, url: preview.link })
      })
  }

  handleTab = (link, title) => {
    this.setState({ current: title, url: link })
    console.log(this.state.current)
  }

  render() {
    const { tabs, url, current } = this.state
    const displayUrl =
      url &&
      url
        .replace('watch?v=', 'embed/')
        .replace('youtu.be', 'www.youtube.com/embed/') + '?controls=0'

    return (
      <div className="Preset TabMenu">
        <section className="Split">
          <div className="Split-half left">
            {tabs && (
              <TabSet
                current={current}
                tabs={tabs}
                handleTab={this.handleTab}
              />
            )}
          </div>
          <div className="Split-half right">
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
          </div>
        </section>
      </div>
    )
  }
}
