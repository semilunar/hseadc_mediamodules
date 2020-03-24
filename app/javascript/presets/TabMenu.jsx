import React from 'react'

import TabSet from '../controls/TabSet'
import TabPreview from '../controls/TabPreview'

const url = 'http://localhost:3000'
const csrfToken = document.querySelector("[name='csrf-token']").content

export default class TabMenu extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      tabs: null,
      current: null,
      srcUrl: null,
      preview: 'default'
    }
  }

  componentDidMount = () => {
    fetch(`${url}/tabattachment`, {
      method: 'GET',
      headers: {
        'X-CSRF-Token': csrfToken,
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(({ tabs } = parsed) => {
        const parsedTabs = tabs.map(tab => {
          if (typeof tab.link === 'object') {
            return {
              title: tab.title,
              link: tab.link.url,
              position: tab.position
            }
          }
          return tab
        })
        parsedTabs.sort((a, b) => a.position - b.position)
        // const toPreview = parsedTabs[0]

        this.setState({
          tabs: parsedTabs
          // ,
          // current: toPreview.position,
          // url: toPreview.link
        })
      })
  }

  handleTab = (link, position) => {
    this.setState({ current: position, url: link })
  }

  changeTabPreview = (preview, url) => {
    this.setState({ preview, url })
  }

  handleNewTab = () => {
    const { tabs } = this.state
    if (tabs) {
      const position = tabs.length + 1
      tabs.push({ title: null, link: null, position })
    } else {
      const tabs = [{ title: null, link: null, position: 1 }]
    }
    this.setState({ tabs })
  }

  handleNewTitle = (title, position) => {
    fetch(`${url}/newtabtitle`, {
      method: 'POST',
      headers: {
        'X-CSRF-Token': csrfToken,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ position, title })
    })
  }

  handleDeleteTab = pos => {
    let { tabs } = this.state
    let last = tabs.length

    if (last <= 2) return

    tabs = tabs.filter(tab => tab.position !== pos)
    this.setState({ tabs })
    fetch(`${url}/deletetabattachment`, {
      method: 'POST',
      headers: {
        'X-CSRF-Token': csrfToken,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ position: pos, last })
    })
  }

  render() {
    const { tabs, url, current, preview } = this.state

    return (
      <div className="Preset TabMenu">
        <section className="Split">
          <div className="Split-half left">
            {tabs && (
              <TabSet
                changeTabPreview={this.changeTabPreview}
                handleNewTitle={this.handleNewTitle}
                current={current}
                tabs={tabs}
                handleTab={this.handleTab}
                handleDeleteTab={this.handleDeleteTab}
              />
            )}
            <div className="new-tab" onClick={this.handleNewTab}>
              Add tab
            </div>
          </div>
          <div className="Split-half right">
            <TabPreview preview={preview} url={url} />
          </div>
        </section>
      </div>
    )
  }
}
