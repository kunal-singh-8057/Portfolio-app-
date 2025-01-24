import React from 'react'
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  /*
     <div className='nav'>
        <h1 className='hnav'>Kunal</h1>
        <Link to='/' className='nlink'>Home</Link>
        <Link to='/about' className='nlink'>About</Link>
        <Link to='/projects' className='nlink'>Projects</Link>
        <Link to='/experiance' className='nlink'>Experience</Link>
        <Link to='/contact' className='nlink'>Contact</Link>

        
    <div className='extra'>
    <label for='toggler'><FontAwesomeIcon icon={faBars} className='bar'/></label>
       <input type='checkbox' id='toggler' className='check'></input>
        </div>

    </div>
    */
  return (
    <>
 <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand fs-1 mx-3" href="#">Kunal</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse fs-4   justify-content-end " id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active mx-5" aria-current="page" to='/'>Home</Link>
        </li>
        <li className="nav-item mx-5">
          <Link className="nav-link" to='/about'>About</Link>
        </li>
        <li className="nav-item mx-5">
          <Link className="nav-link" to='/experiance'>Experience</Link>
        </li>
        <li className="nav-item mx-5">
          <Link className="nav-link" to='/projects'>Projects</Link>
        </li>
        <li className="nav-item mx-5">
          <Link className="nav-link" to='/contact'>Contact</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </>
  )
}

export default Navbar