import React from 'react'
import '../Styles/Footer.css'
import { Link} from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <div className='footer'>
        <Link to='/about' className='flink'>About</Link>
        <Link to='/projects' className='flink'>Project</Link>
        <Link to='/experiance' className='flink'>Experience</Link>
        <Link to='/contact' className='flink'>Contact</Link>
        <br></br>
        <h4>Copyright © 2025 kunal. All Right Reserved </h4>
    </div>
    </>
  )
}

export default Footer