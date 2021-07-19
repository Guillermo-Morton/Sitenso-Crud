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
    case actionTypes.FETCH_DEVS_PENDING:
      return {
        ...state,
        pending: true
      }
    case actionTypes.FETCH_DEVS_SUCCESS:
      return {
        ...state,
        pending: false,
        devs: action.devs
      }
    case actionTypes.FETCH_DEVS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      }
    default:
      return state
  }
}
export const getDevs = state => state.devs
export const getDevsPending = state => state.pending
export const getDevsError = state => state.error
