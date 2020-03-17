import React from 'react'

import ToDoListItem from './ToDoList-Item'

const ToDoList = ({ todos }) => {
  const todosItems = todos.map((item) => {
    return (
      <li>
        <ToDoListItem label={item.label} important={item.important} />
      </li>
    )
  })

  return (
    <div className="text-lg">
      <ul className="pt-6 pb-8 mb-4 shadow-text cursor-default">{todosItems}</ul>
    </div>
  )
}

export default ToDoList
