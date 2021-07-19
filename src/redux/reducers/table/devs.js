import { notDeepStrictEqual } from 'assert'
import actionTypes from '../../actions/table/actionTypes'

const initialState = {
  devs: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_DEV: {
      const devs = state.devs
      devs.push(action.dev)
      return {
        devs
      }
    }
    case actionTypes.REMOVE_DEV: {
      const { index, dev } = action
      const devs = state.devs
      notes[index] = dev
      return {
        devs
      }
    }
    case actionTypes.UPDATE_DEV: {
      const { index } = action
      const devs = state.devs
      delete devs[index]
      return {
        devs
      }
    }
    default:
      return state
  }
}

// if(devs.length > 0){
//     const latestDev = devs[devs.length-1]
//     const newDev = action.dev
//     dev.push(newDev)
//    }