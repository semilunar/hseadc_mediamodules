import React from 'react'

import TabSet from '../controls/TabSet'

export default class TabMenu extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      tabs: [
        {
          title: 'Лендинг',
          link: 'https://www.youtube.com/watch?v=bWLAf8z6CWM'
        },
        {
          title: 'Реклама',
          link: 'https://www.youtube.com/watch?v=YrdNfX7W38U'
        },
        {
          title: 'Далеко',
          link: 'https://www.youtube.com/watch?v=m7A4uy6Nw0k'
        },
        {
          title: 'Видео',
          link: 'https://www.youtube.com/watch?v=dylbA7M3B5Y'
        }
      ],
      current: null,
      url: null
    }
  }

  componentWillMount = () => {
    const [preview] = this.state.tabs
    this.setState({ current: preview.title, url: preview.link })
  }

  handleTab = (link, title) => {
    this.setState({ current: title, url: link })
    console.log(this.state.current)
  }

  render() {
    const { tabs, url, current } = this.state
    const displayUrl = url && url.replace('watch?v=', 'embed/') + '?controls=0'
    return (
      <div className="Preset TabMenu">
        <section className="Split">
          <div className="Split-half left">
            <TabSet current={current} tabs={tabs} handleTab={this.handleTab} />
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
