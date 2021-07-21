import actionTypes from '../../actions/table/actionTypes'

const initialState = {
  pending: false,
  devs: [],
  editingDev: {},
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.EDIT_DEV: {
      return {
        ...state,
        editingDev: action.dev
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
        devs: action.devs.reverse()
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
