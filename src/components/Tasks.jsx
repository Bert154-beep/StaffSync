import React from 'react'

const Tasks = ({data}) => {
  return (
    <div className='flex flex-row items-center justify-around mt-10 ml-5 gap-14 '>
        <div className='p-10 text-white  bg-red-500 rounded-3xl text-2xl font-poppins w-[350px] '>
            <div>Pending Tasks</div>
            <span className='font-bold'>{data.taskCounts.pendingTasks}</span>
            
        </div>
        <div className='p-10 text-white bg-yellow-500 rounded-3xl text-2xl font-poppins w-[350px] '>
            <div>Accepted Tasks</div>
            <span className='font-bold' >{data.taskCounts.newTasks}</span>
        </div>
        <div className='p-10 text-white bg-blue-500 rounded-3xl text-2xl font-poppins w-[350px] '>
            <div>Completed Tasks</div>
            <span className='font-bold' >{data.taskCounts.completedTasks}</span>
        </div>
        <div className='p-10 text-white bg-orange-500 rounded-3xl text-2xl font-poppins w-[350px] '>
            <div>Failed Tasks</div>
            <span className='font-bold' >{data.taskCounts.failedTasks}</span>
        </div>
    </div>
  )
}

export default Tasks