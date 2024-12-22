import React from 'react'
import { useState, useEffect } from 'react'




const Login = ({handleLogin}) => {
    const [Email, setEmail] = useState(null)
    const [Password, setPassword] = useState(null)

    const submitHandler = (e)=>{
        e.preventDefault()
        handleLogin(Email,Password)
        setEmail('')
        setPassword('')

    }
  return (
    <div className='flex items-center justify-center h-screen bg-black'>
        <div className='text-white flex justify-start flex-col p-20 border-2 border-blue-500 rounded-3xl'>
            <p className='font-poppins text-2xl font-bold mb-5 text-white'>LOG IN</p>
                <form onSubmit={(e)=>{
                submitHandler(e)
            }} action="">
            <div className='flex flex-col gap-2'>
            <span className='font-poppins text-lg'>Username</span>
            <input value={Email} onChange={(e)=>{
                setEmail(e.target.value)
            }} required className='bg-black text-white font-poppins p-3 border-2 border-[#A9A9A9] rounded-3xl' placeholder='Username or Email' type="text" />
            <span className='font-poppins text-lg'>Password</span>
            <input value={Password} onChange={(e)=>{
                setPassword(e.target.value)
            }} required className='bg-black text-white font-poppins p-3 border-2 border-[#A9A9A9] rounded-3xl' placeholder='Password' type="password" />
            <input className='mt-8 p-3 bg-blue-500 rounded-3xl font-poppins text-lg font-bold cursor-pointer' type="submit" value="Login" />
            </div>
                </form>
        </div>
    </div>
  )
}

export default Login