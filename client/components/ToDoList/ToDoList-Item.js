import React, { Component } from 'react'

// eslint-disable-next-line react/prefer-stateless-function
export default class ToDoListItem extends Component {
  onLabelClick = () => {
    // eslint-disable-next-line no-console
    console.log(`Done ${this.props.label}`)
  }

  render() {
    const { label, important = false } = this.props

    return (
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
      <span
        className={
          important
            ? 'text-red-1000 font-medium shadow-md-hover'
            : 'text-yellow-500 font-light shadow-lg-hover'
        }
        onClick={this.onLabelClick}
      >
        {label}
      </span>
    )
  }
}
