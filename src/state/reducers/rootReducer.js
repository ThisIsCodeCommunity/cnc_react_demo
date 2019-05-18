import { combineReducers } from 'redux'
import employees from './employeesReducer'

const rootReducer = combineReducers({
  employees
})

export default rootReducer