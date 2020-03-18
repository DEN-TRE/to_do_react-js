import React from 'react'

import Add from './Add'

const AddItem = () => {
  return (
    <div className="flex flex-row justify-start pt-6">
      <input
        className="shadow-lg appearance-none border rounded w-full py-2 mr-2 px-3 tracking-wide text-gray-700 border border-orange-300 leading-tight placeholder-indigo-800 focus:placeholder-gray-500"
        placeholder="What needs to be done?"
      />
      <Add />
    </div>
  )
}

export default AddItem
