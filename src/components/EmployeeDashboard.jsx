import React from 'react'
import Header from './Header'
import Tasks from './Tasks'
import AvaliableTasks from './AvaliableTasks'
import AcceptTask from '../TaskList/AcceptTask'
import CompletedTask from '../TaskList/CompletedTask'
import PendingTask from '../TaskList/PendingTask'
import FailedTask from '../TaskList/FailedTask'

const EmployeeDashboard = (props) => {
  console.log(props.data)
  return (
    <div className='bg-black h-screen'>
        <Header data={props.data} changeUser = {props.changeUser}/>
        <Tasks data={props.data}/>
        <AvaliableTasks data={props.data}/>
      
    </div>
  )
}

export default EmployeeDashboard