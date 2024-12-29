import  { useEffect } from 'react'
import Navbar from './components/Navbar'

import HomePage from './pages/HomePage'
import SingUpPage from './pages/SingUpPage'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'
import SettingsPage from './pages/SettingsPage'


import {Routes,Route, Navigate} from "react-router-dom"
import { useAuthStore } from "./store/useAuthStore"

import{Loader} from "lucide-react"
import { Toaster } from 'react-hot-toast'
const App = () => {
const{authUser,checkAuth,isCheckingAuth ,onlineUsers}=useAuthStore()

console.log(onlineUsers)
useEffect(()=>{checkAuth()},[checkAuth])

console.log({authUser});

if(isCheckingAuth && !authUser ) return(
  <div className="flex items-center justify-center h-screen">
  <Loader className="size-10 animate-spin" />
</div>
)

  return (
    <div data-theme="light">

      <Navbar/>
      <Routes>
        <Route path='/' element={authUser ?<HomePage/>:<Navigate to="/login"/>}/>
        <Route path='/signup' element={ !authUser ? <SingUpPage/>: <Navigate to="/"/>}/>
        <Route path='/login' element={ !authUser ?<LoginPage/> :<Navigate to="/"/>}/>
        <Route path='/settings' element={<SettingsPage/>}/>
        <Route path='/profile' element={ authUser ?<ProfilePage/>:<Navigate to="/login"/>}/>

      </Routes>

      <Toaster/>


      

    
    </div>
  )
}

export default App