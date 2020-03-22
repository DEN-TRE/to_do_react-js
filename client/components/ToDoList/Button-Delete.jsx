import React from 'react'

const ButtonDelete = () => {
  return (
    <div className="self-start bg-red-1100 border border-orange-300 h-12 w-12 flex items-center box-shadow-hover-del justify-center text-orange-300 text-sm md:text-2xl font-semibold rounded-lg mr-2 my-2 overflow-hidden">
      <button type="button" onClick="" className="w-full focus:outline-none">
        <i className="fas fa-times" />
      </button>
    </div>
  )
}

export default ButtonDelete
