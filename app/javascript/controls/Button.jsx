import classnames from 'classnames'
import React from 'react'

export default class Button extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { option, current, handleClick } = this.props

    const classes = classnames({
      Button: true,
      [`${option}`]: true,
      on: option == current
    })

    return <div className={classes} onClick={() => handleClick(option)}></div>
  }
}
