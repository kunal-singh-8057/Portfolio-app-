import React from 'react'
import '../Styles/Home.css'
import Navbar from './Navbar'
import img1 from '../Assets/img1.png'
import img2 from '../Assets/github.png'
import img3 from '../Assets/img3.png'


const Home = () => {
  return (
    <>
    <Navbar></Navbar>
    <br></br>
    <img src={img1} className='img1'></img>
    <div className='text1'>
      <h4>Hello I'm </h4>
      <h1>Kunal</h1>
      <h2>Full Stack Dev</h2>
      <br></br>
      <br></br>
      <a className='btn1' href='https://drive.google.com/file/d/1kwJXkUVyclOwbHTwKb6Qns_6-C3pQKBC/view?usp=drivesdk'>View CV</a>
      <a className='btn2' href='/contact'>Contact Info</a>
    </div>
    <br></br>
    <div className='imgset1'>
     <a href='https://github.com/kunal-singh-8057'><img src={img2} className='img2'></img></a>
    <a href='https://www.linkedin.com/in/kunal-singh-695741274/'><img src={img3} className='img3'></img></a>
    </div>
    </>
  )
}

export default Home
