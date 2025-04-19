import React from 'react'
import '../Styles/Project.css'
import Navbar from './Navbar'
import Footer from '../Components/Footer'
import Pset from './Pset'
const Project = () => {
  return (
    <>
    <Navbar/>
    <br></br>
    <div className='d7'>
    <h4>Browse My Recent</h4>
    <br></br>
    <h1>Projects</h1>
    <br></br>
    </div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <Pset/>
    <br></br>
    <div className='stings'>
    <Footer/>
    </div>
    </>
  )
}

export default Project