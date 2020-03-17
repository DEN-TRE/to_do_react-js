const OPEN_CHARACTER_INFO = 'tall&round/settigs/OPEN_CHARACTER_INFO'
const CLOSE_CHARACTER_INFO = 'tall&round/settigs/CLOSE_CHARACTER_INFO'

const initialState = {
  isCharacterInfo: {
    isShowing: false,
    currentShowingCharacterID: -1
  }
}

// Actions
export const openCharacterInfoAction = (CharacterID) => {
  return {
    type: OPEN_CHARACTER_INFO,
    CharacterID
  }
}

export const closeCharacterInfoAction = () => {
  return {
    type: CLOSE_CHARACTER_INFO
  }
}

const settingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_CHARACTER_INFO:
      return {
        ...state,
        isCharacterInfo: {
          isShowing: true,
          currentShowingCharacterID: action.CharacterID
        }
      }
    case CLOSE_CHARACTER_INFO:
      return {
        ...state,
        isCharacterInfo: {
          isShowing: false,
          currentShowingCharacterID: -1
        }
      }
    default:
      return state
  }
}

export default settingsReducer
