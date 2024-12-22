import React, { useContext, useState, useEffect } from 'react'
import AcceptTask from '../TaskList/AcceptTask'
import CompletedTask from '../TaskList/CompletedTask'
import FailedTask from '../TaskList/FailedTask'
import PendingTask from '../TaskList/PendingTask'


const AvaliableTasks = ({data}) => {


  return (
    <div className='flex shrink-0 justify-start  h-[55%] w-full mt-7 overflow-x-auto items-center gap-5  bg-black'>
        {data.tasks.map((elem,idx)=>{
         
            if(elem.active){
                return <PendingTask key={idx}  data={elem}/>
            }
            if(elem.newTask){
                return <AcceptTask  key={idx} data={elem}/>
            } 
            if(elem.failed){
                return <FailedTask key={idx} data={elem}/>
            }
            if(elem.completed){
                return <CompletedTask key={idx} data={elem}/>
            }

        })}
        
    </div>
  )
}

export default AvaliableTasks