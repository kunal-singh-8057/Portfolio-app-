import React from 'react'
import '../Styles/Contact.css'
import Navbar from './Navbar'
import img9 from '../Assets/email.png'
import img3 from '../Assets/img3.png'
import Footer from './Footer'
const Contact = () => {
  return (
    <>
    <Navbar></Navbar>
    <br></br>
    <div className='d4'>
      <h4>Get In Touch</h4>
      <h1>Contact Me</h1>
      <div className='d5'>
        <img src={img9} className='img9'></img>
        <a href='#'>ks9836185@gmail.com</a>
        <img src={img3} className='img19'></img>
        <div className='nva'><a href='https://www.linkedin.com/in/kunal-singh-695741274/'>Linkedin</a></div>
      </div>
    </div>
    <br></br>
    <br></br>
   <div className='stocks'>
   <Footer></Footer>
   </div>
    <br></br>
    </>
  )
}

export default Contact