import initialState from '../store/initialState'
import { RECEIVE_EMPLOYEES } from '../actions/actionTypes'

const employees = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case RECEIVE_EMPLOYEES:
      newState = action;
      console.log('performing fetch employees action Action')
      return newState;
    default:
      return state;
  }
}

export default employees