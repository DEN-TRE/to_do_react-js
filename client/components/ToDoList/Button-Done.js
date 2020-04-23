import React from 'react'

const ButtonDone = () => {
  return (
    <div className="h-12 w-12 flex items-center justify-center text-2xl font-semibold rounded-lg my-2 overflow-hidden">
      <button type="button" onClick="" className="focus:outline-none mb-px ml-px">
        <i className="far fa-check-circle text-green-500 box-shadow box-shadow-hover-done" />
      </button>
    </div>
  )
}

export default ButtonDone
