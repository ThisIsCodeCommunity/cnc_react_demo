import * as types from './actionTypes'
import axios from 'axios'
const apiURL = 'https://reqres.in/api/users'


const receiveEmployees = (json) => {
  return { type: types.RECEIVE_EMPLOYEES, employees: json.data }
}

const fetchEmployees = () => {
  return dispatch => {
    return axios.get(apiURL)
    .then(response => dispatch(receiveEmployees(response.data)));
  };
}

export { receiveEmployees, fetchEmployees }