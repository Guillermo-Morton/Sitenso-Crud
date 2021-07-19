// ** Redux Imports
import { combineReducers } from 'redux'

// ** Reducers Imports
import auth from './auth'
import navbar from './navbar'
import layout from './layout'
import devs from './table/devs'
import inputs from './table/inputs'

const rootReducer = combineReducers({
  auth,
  navbar,
  layout,
  devs,
  inputs
})

export default rootReducer
