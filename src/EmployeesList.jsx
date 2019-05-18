import React, { Component } from 'react';
import axios from 'axios'

class EmployeesList extends Component {
  state = {
    employees: []
  }

  componentDidMount() {
    this.fetchEmployees()
  }

  async fetchEmployees() {
    let response = await axios.get('https://reqres.in/api/users?per_page=6')
    this.setState({employees: response.data.data})
    
  }

  render() {
    console.log(this.state.employees)
    let employeesListDisplay = this.state.employees.map(employee => {
      return <li key={employee.id}>{employee.first_name}</li>
    })

    return (
      <>
        <ul>
          {employeesListDisplay}
        </ul>
      </>
    );
  }
}

export default EmployeesList;