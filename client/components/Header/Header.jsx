import React from 'react'

const Header = () => {
  return (
    <div className="cursor-default select-none">
      <h1 className="text-3xl font-semibold text-gray-200 box-shadow">My Todo List</h1>
      <div>
        <span>3 more to do / 0 done</span>
      </div>
    </div>
  )
}

export default Header
