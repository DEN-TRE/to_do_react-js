import React from 'react'

import ToDoListItem from './ToDoList-Item'
import ButtonImp from './Button-Imp'
import ButtonDelete from './Button-Delete'
import ButtonDone from './Button-Done'

const ToDoList = ({ todos }) => {
  const todosItem = todos.map((item) => {
    // Разделим ключи объекта todos на две части: id и остальные.
    const { id, ...itemProps } = item
    return (
      <li className="flex flex-row justify-start">
        <ButtonDone />
        <div
          className="w-56 flex-grow flex-row flex text-xs md:text-base items-center border border-orange-300 box-shadow-hover-2 rounded-lg bg-purple-900 shadow-lg px-2 ml-2 mr-4 my-2 py-2"
          key={id}
        >
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <ToDoListItem {...itemProps} />
        </div>
        <ButtonDelete />
        <ButtonImp />
      </li>
    )
  })

  return (
    <div className="text-lg break-words">
      <ul className="flex-col pt-2 mt-6 shadow-text cursor-default">{todosItem}</ul>
    </div>
  )
}

export default ToDoList
