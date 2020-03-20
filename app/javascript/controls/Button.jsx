import classnames from 'classnames'
import React from 'react'

export default class Button extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { option, current, handleClick, value, custClass } = this.props

    const classes = classnames({
      Button: true,
      [`${option}`]: true,
      on: option == current,
      [`${custClass}`]: custClass
    })

    return (
      <div className={classes} onClick={() => handleClick(option)}>
        {value && value}
      </div>
    )
  }
}
