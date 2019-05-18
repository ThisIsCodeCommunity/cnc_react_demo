import initialState from '../store/initialState'
import {FETCH_EMPLOYEES} from '../actions/actionTypes'

const employees = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case FETCH_EMPLOYEES:
      newState = action;
      console.log('performing fetch employees action Action')
      return newState;
    default:
      return state;
  }
}

export default employees