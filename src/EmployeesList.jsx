import React, { Component } from 'react';
// import axios from 'axios'
import { Image, List } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as employeesActions from './state/actions/employeesActions'



class EmployeesList extends Component {
  // state = {
  //   employees: []
  // }

  componentDidMount() {
    // debugger
    // this.fetchEmployees()
    this.props.employeesActions.fetchEmployees()
  }

  // async fetchEmployees() {
  //   let response = await axios.get('https://reqres.in/api/users?per_page=6')
  //   this.setState({ employees: response.data.data })

  // }

  render() {
    console.log(this.props.employees)
    let employeesListDisplay = this.props.employees.map(employee => {
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

const mapStateToProps = (state) => {
  return {
    employees: state.employees.employees
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    employeesActions: bindActionCreators(employeesActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployeesList);