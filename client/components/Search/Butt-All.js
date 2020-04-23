import React from 'react'

const ButtAll = () => {
  return (
    <div className="bg-indigo-1000 text-red-100 h-12 w-24 flex items-center justify-center border border-orange-300 text-xs md:text-sm font-semibold rounded overflow-hidden shadow-lg">
      <button
        type="button"
        onClick=""
        className="w-full mb-px focus:outline-none box-shadow-hover-2"
      >
        <span>All</span>
        <i className="fas fa-tasks ml-2" />
      </button>
    </div>
  )
}

export default ButtAll
