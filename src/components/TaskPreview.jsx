import React, { useContext } from 'react'
import { authContext } from '../Contexts/AuthProvider'

const TaskPreview = ({data}) => {

      const [Userdata, setUserdata] = useContext(authContext)
      
   

      return (
            <div className='bg-[#1c1c1c] h-[350px] w-[1200px] mt-10 rounded-3xl gap-5 overflow-auto p-5'>
                  <div className='bg-black flex items-center justify-around p-3 font-poppins font-medium text-white rounded-3xl mb-5 sticky top-0 z-100'>
                        <span>Name</span>
                        <span>New Task</span>
                        <span>Active Task</span>
                        <span>Completed</span>
                        <span>Failed</span>

                  </div>

                  {Userdata.map((elem, idx)=>{
                        return <div key={idx} className='border-2 border-green-600 p-3 flex justify-around font-poppins font-medium text-white rounded-3xl mb-5'>
                        <p>{elem.name}</p>
                        <p className='text-blue-500'>{elem.taskCounts.newTasks}</p>
                        <p className='text-yellow-400'>{elem.taskCounts.pendingTasks}</p>
                        <p className='text-green-600'>{elem.taskCounts.completedTasks}</p>
                        <p className='text-red-500'>{elem.taskCounts.failedTasks}</p>
                  </div>
                  })}


                 

            </div>
      )
}

export default TaskPreview
