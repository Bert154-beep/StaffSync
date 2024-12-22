import React from 'react'
import EmployeeIcon from '../assets/Employee.svg'

const Header = (props) => {

  const Logout = ()=>{
    localStorage.setItem('LoggedInUser', '')
    props.changeUser('')
 }



  return (
    <div className='text-white flex items-center h-20 w-full'>
        <div className='flex justify-start ml-10 font-poppins text-3xl gap-2'>
            <span>Hello, </span>
            <span className='font-bold'>{props.data.name}</span>
            <img className='flex items-center ml-1 h-9' src={EmployeeIcon} alt="" />
        </div>
        <div className='flex justify-end w-full mr-5'>
            <button onClick={Logout} className='p-3 rounded-3xl w-32 font-poppins font-bold text-black bg-green-500'>Logout</button>

        </div>
    </div>
  )
}

export default Header