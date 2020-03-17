/* eslint-disable no-console */
const GET_DATA = 'tall&round/data/GET_DATA'
const ERROR_HAPPENED = 'tall&round/data//ERROR_HAPPENED'
const REQUEST_STARTED = 'tall&round/data/REQUEST_STARTED'
const REQUEST_DONE = 'tall&round/data/REQUEST_DONE'

const initialState = {
  characters: [],
  isRequesting: true
}

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        characters: action.json
      }
    case REQUEST_STARTED:
      return {
        ...state,
        isRequesting: true
      }
    case REQUEST_DONE:
      return {
        ...state,
        isRequesting: false
      }
    default:
      return state
  }
}

export const fetchData = () => {
  return async (dispatch) => {
    await fetch(`https://akabab.github.io/superhero-api/api/all.json`)
      .then((res) => res.json())
      .then((json) => {
        dispatch({
          type: GET_DATA,
          json
        })
        dispatch({ type: REQUEST_DONE })
      })
      .catch((err) => {
        dispatch({
          type: ERROR_HAPPENED,
          err
        })
        dispatch({ type: REQUEST_DONE })
      })
  }
}

export default dataReducer
