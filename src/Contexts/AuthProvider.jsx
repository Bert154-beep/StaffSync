import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../Utils/LocalStorage'
export const authContext = createContext()

const AuthProvider = ({children}) => {
    const [Userdata, setUserdata] = useState(null)
    useEffect(() => {
      const {employees} = getLocalStorage()
      setUserdata(employees)     
    },[])
    
    useEffect(() => {
      setLocalStorage({ employees: Userdata })
    }, [Userdata])

  return (
    <div>
      <authContext.Provider value={[Userdata, setUserdata]}>
        {children}
      </authContext.Provider>
    </div>
  )
}

export default AuthProvider
