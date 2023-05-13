import { useState } from 'react'
import './App.css'
import Registration from './pages/Registration'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/login'
import Home from './pages/Home'
function App() {
  return (
    <>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Registration/>}/>
        </Routes>
    </>
  )
}

export default App
