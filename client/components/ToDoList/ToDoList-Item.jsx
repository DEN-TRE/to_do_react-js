import React from 'react'

const ToDoListItem = ({ label, important = false }) => {
  return (
    <span
      className={
        important
          ? 'text-red-1000 font-medium shadow-md-hover'
          : 'text-yellow-500 font-light shadow-lg-hover'
      }
    >
      {label}
    </span>
  )
}

export default ToDoListItem
