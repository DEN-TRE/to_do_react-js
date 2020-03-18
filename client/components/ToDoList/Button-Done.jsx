import React from 'react'

const ButtonDone = () => {
  return (
    // eslint-disable-next-line react/button-has-type
    <div className="h-12 w-12 flex items-center justify-center text-2xl font-semibold rounded-lg mr-2 my-2 overflow-hidden">
      <button type="button" onClick="" className="focus:outline-none mb-px ml-px">
        <i className="far fa-check-circle text-green-500 box-shadow" />
      </button>
    </div>
  )
}

export default ButtonDone
