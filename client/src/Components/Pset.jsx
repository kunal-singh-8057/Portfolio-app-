import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import  '../Styles/pset.css'

const Pset = () => {
    const[users,setusers] = useState([]);

    useEffect(()=>{
        Axios.get("https://portfolio-app-ecru-pi.vercel.app/viewprojects").then((response)=>{
            setusers(response.data)
        }).catch((error)=>{
            console.log(error)
        })
    },[]);


  return (
    <>
    <div className='s1'>
    {
            users.map((user)=>{
                return(
                    <div className='ss1'>
                        <img src={user.ilink} className='iilinks'></img>
                        <h2>{user.name}</h2>
                        <br></br>
                        <a href={user.glink}>GitHub</a>
                        <a href={user.wlink}>Live Demo</a>
                    </div>
                )
            })
        }
    </div>
 
   <br></br>
   <br></br>

    
    </>
  )
}

export default Pset