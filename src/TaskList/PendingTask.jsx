import React from 'react'
import { useState, useContext } from 'react';
import { authContext } from '../Contexts/AuthProvider';

const PendingTask = ({data}) => {

  
   
    return (
       

        <div className='bg-yellow-500 min-w-[300px] max-w-[300px] h-[90%] p-5 rounded-3xl'>
            <div className='flex'>
                <span className='px-2 flex flex-nowrap items-center h-fit rounded-3xl w-fit font-poppins font-bold bg-red-800 '>{data.category}</span>
                <span className=' flex justify-end w-full'>{data.taskDate}</span>
            </div>
            <div className='mt-2 font-bold mb-0 text-2xl'>{data.taskTitle}</div>
            <div className='mt-5 font-poppins'>{data.taskDescription}</div>
            <div className='flex items-center justify-around w-full h-1/3'>
                <div  className='p-4 font-poppins font-bold bg-blue-600 rounded-3xl text-sm'>Pending Task</div>
        
            </div>
        </div>
        
    )
}


export default PendingTask