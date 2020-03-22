import React from 'react'

// eslint-disable-next-line import/no-named-as-default
import ButtAll from './Butt-All'
// eslint-disable-next-line import/no-named-as-default
import ButtActive from './Butt-Active'
// eslint-disable-next-line import/no-named-as-default
import ButtDone from './Butt-Done'

const Search = () => {
  return (
    <div className="flex flex-col md:flex-row justify-start mt-3">
      <input
        className="shadow-lg outline-none tracking-wide appearance-none border rounded text-sm w-full py-2 mr-2 px-3 border border-orange-300 text-gray-700 leading-tight placeholder-indigo-800 focus:placeholder-gray-500"
        placeholder="Search"
      />
      <div className="flex flex-row justify-center mt-3 md:mt-0">
        <ButtAll />
        <ButtActive />
        <ButtDone />
      </div>
    </div>
  )
}

export default Search
