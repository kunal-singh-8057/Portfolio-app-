import React from 'react'
import './App.css'
import { BrowserRouter, createBrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Experiance from './Components/Experiance'
import Project from './Components/Project'
import Contact from './Components/Contact'
import Admine from './Components/Admine'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/experiance' element={<Experiance/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/projects' element={<Project/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/admine' element={<Admine/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App