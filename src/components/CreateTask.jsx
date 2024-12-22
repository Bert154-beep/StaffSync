import React, { useContext } from 'react'
import TaskPreview from './TaskPreview'
import { useState } from 'react'
import { authContext } from '../Contexts/AuthProvider'

const CreateTask = ({data}) => {
  const [Userdata, setUserdata] = useContext(authContext)

  const [taskTitle, settaskTitle] = useState('')
  const [taskDescription, settaskDescription] = useState('')
  const [category, setcategory] = useState('')
  const [taskDate, settaskDate] = useState('')
  const [AssignTo, setAssignTo] = useState('')

  const SubmitHandler = (e) => {
    e.preventDefault()

    const newTask = { taskTitle, taskDescription, category, taskDate, AssignTo, active: false, failed: false, newTask: true, completed: false }

    const updatedData = Userdata.map((elem) => {
      if (AssignTo === elem.name) {
        return {
          ...elem,
          tasks: [...elem.tasks, newTask],
          taskCounts: {
            ...elem.taskCounts,
            newTask: elem.taskCounts.newTask + 1
          }
        }
      }
      return elem
    })

    setUserdata(updatedData)
    console.log(updatedData)
  }

  return (
    <div className='flex flex-col items-center justify-center mt-10 bg-black'>
      <div className='h-[550px] w-[1200px] bg-[#1c1c1c] rounded-3xl'>
        <form onSubmit={SubmitHandler} className='m-5' action="">
          <div className='flex flex-col'>
            <span className='px-5 mb-2 mt-2 text-white font-poppins text-xl'>Task</span>
            <input onChange={(e) => settaskTitle(e.target.value)} value={taskTitle} className='ml-4 w-1/2 bg-black rounded-3xl font-poppins text-white p-2' type="text" placeholder='Make A UI Design' />
          </div>
          <div className='flex flex-col'>
            <span className='px-5 mb-2 mt-2 text-white font-poppins text-xl'>Date</span>
            <input onChange={(e) => settaskDate(e.target.value)} value={taskDate} className='ml-4 w-1/2 bg-black rounded-3xl font-poppins text-white p-2' type="Date" />
          </div>
          <div className='flex flex-col'>
            <span className='px-5 mb-2 mt-2 text-white font-poppins text-xl'>Assign To</span>
            <input onChange={(e) => setAssignTo(e.target.value)} value={AssignTo} className='ml-4 w-1/2 bg-black rounded-3xl font-poppins text-white p-2' type="text" placeholder='Assign To' />
          </div>
          <div className='flex flex-col'>
            <span className='px-5 mb-2 mt-2 text-white font-poppins text-xl'>Category</span>
            <input onChange={(e) => setcategory(e.target.value)} value={category} className='ml-4 w-1/2 bg-black rounded-3xl font-poppins text-white p-2' type="text" placeholder='Dev, Engineer' />
          </div>
          <div className='flex flex-col p-5 gap-2'>
            <span className='text-white font-poppins text-base'>Description</span>
            <input onChange={(e) => settaskDescription(e.target.value)} value={taskDescription} className='w-1/2 bg-black rounded-3xl p-2 text-white' type="text" placeholder='Write A Description' />
            <input className='p-2 mt-5 ml-10 rounded-3xl text-white font-poppins font-bold bg-blue-600 w-96 flex items-center justify-center cursor-pointer' type="submit" value="Create Task" />
          </div>
        </form>
      </div>
      <TaskPreview />
    </div>
  )
}

export default CreateTask