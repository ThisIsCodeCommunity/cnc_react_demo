import * as types from './actionTypes'
import axios from 'axios'
import { dispatch } from 'rxjs/internal/observable/range';

const apiURL = 'https://reqres.in/api/users'


const receiveEmployees = (json) => {
  return { type: types.RECEIVE_EMPLOYEES, employees: json.data }
}

const fetchEmployees = () => {
  // let response = await axios.get(apiURL)
  // let employees = response.data.data
  // return { type: types.FETCH_EMPLOYEES, employees: employees }
  axios.get(apiURL).then(response => {
    dispatch(receiveEmployees(response.data))
  })
}

export { receiveEmployees, fetchEmployees }