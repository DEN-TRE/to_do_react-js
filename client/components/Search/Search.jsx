import React from 'react'

// eslint-disable-next-line import/no-named-as-default
import ButtAll from './Butt-All'
// eslint-disable-next-line import/no-named-as-default
import ButtActive from './Butt-Active'
// eslint-disable-next-line import/no-named-as-default
import ButtDone from './Butt-Done'

const Search = () => {
  return (
    <div className="flex flex-row justify-start pt-3">
      <input
        className="shadow-lg outline-none tracking-wide appearance-none border rounded w-full py-2 mr-2 px-3 border border-orange-300 text-gray-700 leading-tight placeholder-indigo-800 focus:placeholder-gray-500"
        placeholder="Search"
      />
      <ButtAll />
      <ButtActive />
      <ButtDone />
    </div>
  )
}

export default Search
