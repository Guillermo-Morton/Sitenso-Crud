import actionTypes from '../../actions/table/actionTypes'

const initialState = {
  pending: false,
  devs: [],
  error: null
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
    case actionTypes.FETCH_PRODUCTS_PENDING:
      return {
        ...state,
        pending: true
      }
    case actionTypes.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        pending: false,
        devs: action.devs
      }
    case actionTypes.FETCH_PRODUCTS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      }
    default:
      return state
  }
}
export const getProducts = state => state.devs
export const getProductsPending = state => state.pending
export const getProductsError = state => state.error
