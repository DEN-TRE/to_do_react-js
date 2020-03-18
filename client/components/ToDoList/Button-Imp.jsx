import React from 'react'

const ButtonImp = () => {
  return (
    // eslint-disable-next-line react/button-has-type
    <div className="bg-green-1000 border border-orange-300 h-12 w-12 flex items-center box-shadow-hover-2 justify-center text-red-700 text-2xl font-semibold rounded-lg ml-2 my-2 overflow-hidden">
      <button type="button" onClick="" className="focus:outline-none">
        <i className="fas fa-exclamation" />
      </button>
    </div>
  )
}

export default ButtonImp
