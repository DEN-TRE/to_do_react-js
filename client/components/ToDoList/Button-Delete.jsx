import React from 'react'

const ButtonDelete = () => {
  return (
    // eslint-disable-next-line react/button-has-type
    <div className="bg-red-1100 border border-orange-300 h-12 w-12 flex items-center box-shadow-hover-del justify-center text-orange-300 text-2xl font-semibold rounded-lg mr-2 my-2 overflow-hidden">
      <button type="button" onClick="" className="focus:outline-none">
        <i className="fas fa-times" />
      </button>
    </div>
  )
}

export default ButtonDelete
