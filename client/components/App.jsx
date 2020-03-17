import React from 'react'

import Header from './Header/Header'
import Search from './Search/Search'
import ToDoList from './ToDoList/ToDoList'

const App = () => {
  const todoData = [
    { label: 'Drink Coffee', important: false },
    { label: 'Build React App', important: true },
    { label: 'Do something else', important: false }
  ]

  const isLoggedIn = true
  const loginBox = <span>Log in please</span>

  return (
    <div className="w-full h-screen flex bg-teal-700 text-gray-500 p-4 md:p-6 items-center justify-center">
      <form className="bg-teal-800 shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <form className="mb-4">
          {isLoggedIn ? null : loginBox}
          <Header />
          <Search />
          <ToDoList todos={todoData} />
        </form>
      </form>
    </div>
  )
}

App.propTypes = {}

export default App
