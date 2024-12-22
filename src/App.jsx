import { useState, useEffect, useContext } from 'react'
import Login from './components/Login'
import EmployeeDashboard from './components/EmployeeDashboard'
import AdminDashboard from './components/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './Utils/LocalStorage'
import { authContext } from './Contexts/AuthProvider'

function App() {

  const [User, setUser] = useState(null)
  const [LoggedInUserData, setLoggedInUserData] = useState(null)

  const [Userdata, setUserdata] = useContext(authContext)

  
  



  const handleLogin = (email,password)=>{
    if (email == 'admin@me.com' && password == '456') {
      setUser('admin')
      localStorage.setItem('LoggedInUser', JSON.stringify({role: 'admin'}))
    }else if(Userdata ){
      const employee = Userdata.find((e)=>email == e.email && password == e.password)
      if (employee) {
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('LoggedInUser', JSON.stringify({role: 'employee'})) 
        localStorage.setItem(JSON.stringify(employee)) 
      }
    }

  }

  return (
    <>
      {!User ? <Login handleLogin={handleLogin}/>: ''}
      {User == 'admin' ? <AdminDashboard changeUser={setUser}/>: (User == 'employee' ? <EmployeeDashboard changeUser={setUser} data={LoggedInUserData}/>: null)}
    </>
  )
}

export default App
