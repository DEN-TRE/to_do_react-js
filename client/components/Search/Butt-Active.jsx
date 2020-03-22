import React from 'react'

const ButtActive = () => {
  return (
    <div className="bg-indigo-1000 text-red-100 h-20 w-32 flex items-center justify-center border border-orange-300 text-xs md:text-sm font-semibold rounded ml-2 overflow-hidden shadow-lg">
      <button
        type="button"
        onClick=""
        className="w-full mb-px focus:outline-none box-shadow-hover-2"
      >
        <span>Active</span>
        <i className="fas fa-thumbtack ml-2" />
      </button>
    </div>
  )
}

export default ButtActive
