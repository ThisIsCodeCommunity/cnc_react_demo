import React, { Component } from 'react';
import axios from 'axios'
import { Image, List } from 'semantic-ui-react'


class EmployeesList extends Component {
  state = {
    employees: []
  }

  componentDidMount() {
    this.fetchEmployees()
  }

  async fetchEmployees() {
    let response = await axios.get('https://reqres.in/api/users?per_page=6')
    this.setState({ employees: response.data.data })

  }

  render() {
    console.log(this.state.employees)
    let employeesListDisplay = this.state.employees.map(employee => {
      return (
        <List.Item key={employee.id}>
          <Image avatar src={employee.avatar} />
          <List.Content>
            <List.Header as='h5'>{`${employee.first_name} ${employee.last_name}`}</List.Header>
            <List.Description>{employee.email}</List.Description>
          </List.Content>

        </List.Item>
      )

    })

    return (
      <>
        <List relaxed>
          {employeesListDisplay}
        </List>
      </>
    );
  }
}

export default EmployeesList;