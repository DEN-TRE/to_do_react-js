import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import dataReducer from './data'
import settingsReducer from './settings'

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    data: dataReducer,
    settings: settingsReducer
  })

export default createRootReducer
