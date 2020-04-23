import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Head from './head'

import Header from './Header/Header'
import Search from './Search/Search'
import ToDoList from './ToDoList/ToDoList'
import AddItem from './AddPanel/AddItem'

const App = () => {
  const todoData = [
    { label: 'Drink Coffee', important: false, id: 1 },
    { label: 'Build React App', important: true, id: 2 },
    { label: 'Do something else', important: false, id: 3 },
    {
      label: 'Do something else before',
      important: false,
      id: 4
    },
    { label: 'Drink Coffee', important: false, id: 5 },
    { label: 'Build React App', important: true, id: 6 },
    { label: 'Do something else', important: false, id: 7 }
  ]

  const isLoggedIn = true
  const loginBox = <span>Log in please</span>

  return (
    <div>
      <Head title="Hello" />
      <div className="w-full h-screen flex bg-scroll bg-cover container-img-bg text-gray-500 p-4 md:p-6 items-center justify-center">
        <form className="w-full max-w-3xl bg-indigo-900 shadow-2xl box-shadow-bg rounded-lg px-8 pt-6 pb-6 mb-4">
          <form className="mb-4">
            {isLoggedIn ? null : loginBox}
            <Header />
            <Search />
            <ToDoList todos={todoData} />
            <AddItem />
          </form>
        </form>
      </div>
    </div>
  )
}

App.propTypes = {}

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App)
