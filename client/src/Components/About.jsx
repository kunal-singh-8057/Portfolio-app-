import React from 'react'
import '../Styles/About.css'
import img4 from '../Assets/about.png'
import img5 from '../Assets/experience.png'
import img6 from '../Assets/education.png'
import img7 from '../Assets/arrow.png'
import Navbar from './Navbar'
import Footer from '../Components/Footer'
const About = () => {
  return (
    <>
     <Navbar></Navbar>
     <br></br>
     <div className='aheading'>
   <h4>Get To Know More</h4>
   <h1>About Me</h1>
   </div>
   
     <div className='d1'>
      <img src={img4} className='img4'></img>
     </div>

     <div className='text2'>
      <img src={img5} className='img5'></img>
      <br></br>
      <h2>Experiance</h2>
      <br></br>
      <h3 className='g'>2+ Years</h3>
      <h3 className='f'>Full Stack Developer</h3>
     </div>
     

     
     <div className='text3'>
      <img src={img6} className='img5'></img>
      <br></br>
      <h2>Education</h2>
      <br></br>
      <h3 className='e1'>B.tech Bachelor Degree</h3>
      <h3 className='e2'>Diploma in Graphics</h3>
     </div>

     <div className='p1'>
      <p>
      I am kunal a versatile freelance web developer 
      and graphic designer with a passion to create visually appealing and user-friendly digital 
      experiences. With expertise in web dev techs like HTML, CSS, JavaScript, and popular frams, alongside proficiency in graphic design tools such as Adobe Photoshop, Illustrator, and Figma, I offer a unique blend of technical and creative skills. Whether it's building responsive websites, crafting custom logos, or designing digital marketing materials, 
      I focus on delivering high-quality work that meets the specific needs of my clients while ensuring a seamless and engaging user experience.
      </p>
      <br></br>
      <img src={img7} className='img7'></img>
     </div>

     <br></br>
     <div className='smoothss'>
     <Footer className='f2'></Footer>
     </div>
    
     <br></br>
    </>
  )
}

export default About