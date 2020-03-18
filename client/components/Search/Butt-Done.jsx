import React from 'react'

const ButtDone = () => {
  return (
    <div className="bg-indigo-1000 text-red-100 h-12 w-32 flex items-center justify-center border border-orange-300 text-sm font-semibold rounded ml-2 overflow-hidden shadow-lg">
      <button type="button" onClick="" className="focus:outline-none mb-px box-shadow-hover-2">
        <span>Done</span>
        <i className="fas fa-check-double ml-2" />
      </button>
    </div>
  )
}

export default ButtDone
